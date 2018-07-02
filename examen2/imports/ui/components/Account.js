
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';


class AccountPage extends Component {

  constructor(props) {
    super(props);


  }
  render() {
    return (
      <section className="intro-section" style={{ marginLeft: '160px' }}>
        <div className="container" style={{
          marginLeft: 'auto', textAlign: 'center', color: 'black', backgroundColor: 'whiteSmoke', marginRight: 'auto',
          marginTop: '100px', width: '450px', height: '250px'
        }}>
          <div className="row">
            <div className="col-md-1 col-lg-2"></div>
            <div className="col-md-10 col-lg-8">
              <div className="intro">
                <br/>
                <br/>
                <h2><b>USERNAME:</b>{this.props.currentUser.username}</h2>
                <h2><b>EMAIL:</b>{this.props.currentUser.emails[0].address}</h2>
              {console.log(this.props.currentUser.emails)}

              </div>
            </div>
          </div>
        </div>

      </section>
    );

  }
}
export default withTracker(() => {
  return {
    
    currentUser: Meteor.user(),
  };
})(AccountPage);