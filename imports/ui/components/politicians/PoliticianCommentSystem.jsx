import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import PoliticianViewComments from './PoliticianViewComments';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const CustomTextField = withStyles({
  root: {
    '& label.Mui-focused': { color: '#009245' },
    '& .MuiInput-underline:after': { borderBottomColor: '#009245' }
  }
})(TextField);

function inputValidation (inputStr) {
  // console.log(inputStr.charAt(0));
  // console.log(inputStr.charAt(inputStr.length - 1));
  if ((inputStr.length === 1)) {
    return (inputStr.charAt(0) === ' ') ? 1 : 0;
  } else { return ((inputStr.charAt(0) === ' ') || (inputStr.charAt(inputStr.length - 1) === ' ')) ? 1 : 0; }
}

export default class PoliticianMakeAComment extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politician: '',
      messageInput: '',
      _id: '',
      commentsArray: null
    };
    this.clearInputs = this.clearInputs.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.setState({ politician: this.props.politician });
    let that = this;
    Meteor.call('comments.findByID', this.props.politician._id, function (err, res) {
      if (err) {
        console.log(err.reason);
      } else {
        // console.log(res);
        that.setState({ commentsArray: res });
        console.log(that.state.commentsArray);
      }
    });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps !== this.props) {
      let that = this;
      let politician = this.props.politician;
      console.log('politician: ', politician);
      this.setState({ politician: politician, commentsArray: [] });
      Meteor.call('comments.findByID', this.props.politician._id, function (err, res) {
        if (err) {
          console.log(err.reason);
        } else {
          // console.log(res);
          that.setState({ commentsArray: res });
          console.log(that.state.commentsArray);
        }
      });
    }
  }

  clearInputs () { this.setState({ messageInput: '' }); }

  handleMessage (event) { /* console.log('handleMessage:', this.state.messageInput); */ this.setState({ messageInput: event.target.value }); }

  handleSubmit (event) {
    event.preventDefault();

    if (inputValidation(this.state.messageInput)) {
      this.clearInputs();
      alert('Message cannot start or end with a blank space.');
    }

    let username = Meteor.users.findOne(Meteor.userId).username;
    let politicianID = this.props.politician._id;
    let message = this.state.messageInput;

    this.clearInputs();
    // console.log(this.state.messageInput);
    this.setState({ commentsArray: [...this.state.commentsArray, { username: username, message: message }] });
    Meteor.call('comments.add', politicianID, message);
  }

  render () {
    let subHeaderStyle = { fontFamily: 'DM Serif Display', fontSize: '1.25em', fontWeight: 'bold', fontColor: '#009245', textAlign: 'center', marginBottom: '-0.2em' };
    let politician = this.state.politician;
    console.log(politician._id);
    if (this.state.commentsArray) {
      return (
        <div>
          <Grid item xs={12} >
            <span style={subHeaderStyle}>
              Here's what others have had to say about {politician.firstname} {politician.lastname}.
            </span>
            <PoliticianViewComments commentsArray={this.state.commentsArray} />
          </Grid>

          <span style={subHeaderStyle}>
            Have something to say about {politician.firstname} {politician.lastname}?
          </span>
          <form onSubmit={this.handleSubmit}>
            <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <CustomTextField
                name='message_Input' fullWidth label='Share your thoughts.' style={{ marginBottom: '0.1em' }}
                value={this.state.messageInput} onChange={this.handleMessage}
              />
              <Button type='submit' variant='contained' style={{ fontFamily: 'Source Sans Pro', fontWeight: 'bold', color: 'white', backgroundColor: '#009245' }}>
                Post
              </Button>

            </Container>
          </form>
        </div>
      );
    } else {
      return (
        <>
          Loading...
        </>
      );
    }
  }
}
