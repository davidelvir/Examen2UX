import { Mongo } from 'meteor/mongo';
 
export const Tasks = new Mongo.Collection('tasks');
export const MensajesDB = new Mongo.Collection('mensajes');
export const MensajesPrivados = new Mongo.Collection('mensajesPrivados');