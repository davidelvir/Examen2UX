import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import SignOutButton from './SignOut';
import * as routes from '../constants/routes'
import { withTracker } from 'meteor/react-meteor-data';

import './Navigation.css';
import AccountsUIWrapper from '../AccountsUIWrapper';


class Navigation extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                {this.props.currentUser ?
                    <NavigationAuth />
                    : <NavigationNonAuth />}
            </div>
        );
    }
}
const NavigationAuth = () =>
    <div className="sidenav">
        <a><Link to={routes.HOME}>FEED</Link></a>
        <a><Link to={routes.ACCOUNT}>ACCOUNT</Link></a>
        <a><Link to={routes.MESSAGES}>WRITE MESSAGES</Link></a>
        <a><Link to={routes.PRIVATE_MESSAGES}>PRIVATE MESSAGES</Link></a>
        <a><Link to={routes.LANDING} onClick={() => Meteor.logout()} >SignOut</Link></a>
        {/*<a><button onClick={() => Meteor.logout()}>SignOut</button></a>*/}
    </div>


const NavigationNonAuth = () =>
    <nav className="sidenav">
        <a>BLOQUEADO</a>
        <a>POR</a>
        <a>FALTA DE</a>
        <a>LOGIN</a>
        
    </nav>


export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(Navigation);