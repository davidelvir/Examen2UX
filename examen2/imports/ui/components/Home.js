import React, { Component } from 'react';
import { MensajesDB } from '../../api/tasks';
import { withTracker } from 'meteor/react-meteor-data';


import './Navigation.css'
import Mensaje from './Mensaje';
//import * as firebase from 'firebase';


class HomePage extends Component {
  renderMessages(){
    let mensajes = this.props.mensajes;
    
    return mensajes.map((mensaje) => (
      <Mensaje mensaje={mensaje} />
    ));
  }
  render() {
    
    return (
      <div style={{ textAlign: 'center', marginLeft: '160px' }}>
        <div style={{ padding: '2%' }} className="msg" id="msgs">
          <h1>Welcome to your feed!</h1>
          {this.renderMessages()}

        </div>
      </div>
    );
  }

}
  


export default withTracker(() => {
  return {
    mensajes: MensajesDB.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),
  };
})(HomePage);