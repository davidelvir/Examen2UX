import React, { Component } from 'react';
import { MensajesDB } from '../../api/tasks';

// Task component - represents a single todo item
export default class Mensaje extends Component {
    
    render() {
        

        return (
            <p>
                {this.props.mensaje.username}
                <br/>
                {this.props.mensaje.text}
            </p>
           
        );
    }
}