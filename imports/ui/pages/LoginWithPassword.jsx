import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': { fontFamily: 'Fact-ExpandedMedium', color: '#009245' },
    '& .MuiInput-underline:before': { borderBottomColor: 'black' },
    '& .MuiInput-underline:after': { borderBottomColor: '#009245' }
  }
})(TextField);

export class LoginWithPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(e.target.name, e.target.value, (typeof e.target.value));
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
        <Container>
          <CustomTextField name='username' label='Pick a name. (REQUIRED!)' style={{ marginBottom: '0.1em' }}
            required autoComplete='username' value={this.state.username} onChange={this.handleChange.bind(this)} />
          <CustomTextField name='password' label='Pick a password. (REQUIRED!)' type='password' style={{ marginBottom: '0.1em' }}
            required autoComplete='current-password' value={this.state.password} onChange={this.handleChange.bind(this)} />
        </Container>
      </div>
    );
  }
}

export default LoginWithPassword;
