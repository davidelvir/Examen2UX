import React, { Component } from 'react';
import AccountsUIWrapper from '../AccountsUIWrapper';
import { withTracker } from 'meteor/react-meteor-data';

const LandingPageAuth = () =>
  <div style={{ marginLeft: '160px', textAlign: 'center' }}>
    <h1>¡BIENVENIDO A MI EXPERIENCIA!</h1>
  </div>

const LandingPageNonAuth = () =>
  <div style={{ marginLeft: '160px', textAlign: 'center' }}>
    <h1>¡BIENVENIDO A MI EXPERIENCIA!</h1>
    <h2>¡DEBES HACER LOGIN PRIMERO!</h2>
    <AccountsUIWrapper />
  </div>


class LandingPage extends Component {


  render() {
    return (
      <div id="profil" style={{ marginLeft: '160px', marginTop: ' 160px' }} >
        
          {this.props.currentUser ?
            <LandingPageAuth />
            : <LandingPageNonAuth />}
      
      </div>
    );

  }
}
export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(LandingPage);