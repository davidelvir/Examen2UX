import React, { Component } from 'react';
import { MensajesPrivados } from '../../api/tasks';
import { withTracker } from 'meteor/react-meteor-data';
import Mensaje from './Mensaje';

class MensajesPriv extends Component {
    renderMessages(){
        let mensajes = this.props.mensajes;
        mensajes = mensajes.filter(mensaje => mensaje.owner == Meteor.userId());
        return mensajes.map((mensaje) => (
          <Mensaje mensaje={mensaje} />
        ));
      }
    
    render() {
        return (
            <div style={{ textAlign: 'center', marginLeft: '160px' }} className="msg" id="msgs">
                <h1>Estos son tus mensajes privados!</h1>
                {this.renderMessages()}
            </div>
        );
    }
}
export default withTracker(() => {
    return {
      mensajes: MensajesPrivados.find({}, { sort: { createdAt: -1 } }).fetch(),
      currentUser: Meteor.user(),
    };
  })(MensajesPriv);