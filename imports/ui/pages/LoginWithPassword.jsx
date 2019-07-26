import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class LoginWithPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    Meteor.loginWithPassword(this.state.username, this.state.password, function (error) {
      if (error) {
        console.log('There was an error:' + error.reason);
      } else {
        alert('hey');
      }
    });
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default LoginWithPassword;
