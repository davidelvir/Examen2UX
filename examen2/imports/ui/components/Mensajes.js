import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { MensajesDB } from '../../api/tasks';
import { MensajesPrivados } from '../../api/tasks';
import ReactDOM from 'react-dom';


class Mensajes extends Component {
    onClick(event) {
        event.preventDefault();
        var radios = document.getElementsByName('options');
        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.TAmessages).value.trim();
        if (radios[0].checked) {
            MensajesDB.insert({
                text,
                createdAt: new Date(), // current time
                owner: Meteor.userId(),           // _id of logged in user
                username: Meteor.user().username,  // username of logged in user
            });

            // Clear form
            ReactDOM.findDOMNode(this.refs.TAmessages).value = '';
        }
        if(radios[1].checked){
            MensajesPrivados.insert({
                text,
                createdAt: new Date(), // current time
                owner: Meteor.userId(),           // _id of logged in user
                username: Meteor.user().username,  // username of logged in user
            });
    
            // Clear form
            ReactDOM.findDOMNode(this.refs.TAmessages).value = '';
        }
        window.alert("¡¡MENSAJE ENVIADO!!");
    }
    render() {
        return (
            <div style={{ textAlign: 'center', marginLeft: '160px' }} id="message">

                <h1 id="saludo"> </h1>
                <h2>Escribe tu mensaje</h2>
                <div>
                    <textarea rows="4" cols="50" ref="TAmessages" style={{ color: 'black' }}></textarea>
                </div>
                <div>
                    <button type="submit" id="sendmessage" style={{ color: 'black' }} onClick={this.onClick.bind(this)}>
                        Send Message
                    </button>
                </div>
                <div id='mensajes'>

                </div>
                <div>
                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
                        <input type="radio" id="option-1" className="mdl-radio__button" name="options" value="1" checked />
                        <span className="mdl-radio__label">Public</span>
                    </label>
                    <label className="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-2">
                        <input type="radio" id="option-2" className="mdl-radio__button" name="options" value="2" />
                        <span className="mdl-radio__label">Private</span>
                    </label>
                    <br />
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {

        currentUser: Meteor.user(),
    };
})(Mensajes);
