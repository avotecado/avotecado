import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

class LoginComponent extends Component {
  render () {
    console.log(this.props.user);
    console.log(this.props);
    return (
      <div>
        { this.props.user ? this.props.user._id : 'no user id available' }
        <br />
        { this.props.user ? this.props.user.username : 'no username available' }
      </div>
    );
  }
}

export default withTracker(() => { return { user: Meteor.user() }; })(LoginComponent);
