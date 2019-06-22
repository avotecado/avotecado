import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import Button from '@material-ui/core/Button';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: '',
      pass: ''
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleUser (event) { this.setState({ user: event.target.value }); }
  handlePass (event) { this.setState({ pass: event.target.value }); }

  clearInputs () {
    this.setState = ({
      user: '',
      pass: ''
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    let loginData = {
      user: this.state.user,
      pass: this.state.pass
    };

    this.clearInputs();
    this.props.logIn(loginData);
  }

  render () {
    return (
      <div>
        <h6>Register</h6>
        <form className='textInputArea' onSubmit={this.handleSubmit}>
          <textarea name='userInput' placeholder='username' required value={this.state.user} onChange={this.handleUser} /> <p />

          <textarea name='passInput' placeholder='password' required value={this.state.pass} onChange={this.handlePass} /> <p />
          <Button color='secondary' type='submit'>submit</Button> <p />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    messageArray: state.messageArray
  };
};

export default connect(mapState, { logOut })(Login);
