import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

import CommentViewer from './CommentViewer';

import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const subHeaderStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '1.85em',
    color: 'black',
    textAlign: 'center',
    marginBottom: '-0.2em'
};
const buttonStyle = {
    fontFamily: 'Helvetica Black Extended',
    color: 'white',
    fontSize: '1.25em',
    backgroundColor: '#009245',
    textTransform: 'none'
};
const disabledButtonStyle = {
    fontFamily: 'Helvetica Black Extended',
    color: 'white',
    fontSize: '1.25em',
    backgroundColor: '#828282',
    textTransform: 'none'
};

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

function inputValidation(inputStr) {
    if ((inputStr.length === 1)) {
        return (inputStr.charAt(0) === ' ') ? 1 : 0;
    } else {
        return ((inputStr.charAt(0) === ' ') || (inputStr.charAt(inputStr.length - 1) === ' ')) ? 1 : 0;
    }
}

export default class PoliticianMakeAComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: '',
            messageInput: '',
            _id: '',
            commentsArray: null
        };
    }

    componentDidMount() {
        this.setState({politician: this.props.politician});
        let that = this;
        Meteor.call('comments.findByID', this.props.politician._id, function (err, res) {
            if (err) {
                console.log(err.reason);
            } else {
                that.setState({commentsArray: res});
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            let that = this;
            let politician = this.props.politician;
            this.setState({politician: politician, commentsArray: []});
            Meteor.call('comments.findByID', this.props.politician._id, function (err, res) {
                if (err) {
                    console.log(err.reason);
                } else {
                    that.setState({commentsArray: res});
                }
            });
        }
    }

    clearInputs = () => {
        this.setState({messageInput: ''});
    };

    handleMessage = (event) => {
        this.setState({messageInput: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (inputValidation(this.state.messageInput)) {
            this.clearInputs();
            alert('Message cannot start or end with a blank space.');
        }

        let username = Meteor.users.findOne(Meteor.userId).username;
        let politicianID = this.props.politician._id;
        let message = this.state.messageInput;

        this.clearInputs();
        this.setState({commentsArray: [...this.state.commentsArray, {username: username, message: message}]});
        Meteor.call('comments.add', politicianID, message);
    }

    render() {
        let politician = this.state.politician;
        if (this.state.commentsArray) {
            return (
                <div>
          <span style={subHeaderStyle}>
            Have something to say about {politician.firstname} {politician.lastname}?
          </span>
                    <form onSubmit={this.handleSubmit}>
                        <Container style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            marginBottom: '3em'
                        }}>
                            <CustomTextField
                                name='message_Input' fullWidth label='Share your thoughts.'
                                style={{marginBottom: '0.1em'}}
                                value={this.state.messageInput} onChange={this.handleMessage}
                            />
                            {
                                Meteor.user() ?
                                    <Button type='submit' variant='contained' style={buttonStyle}>
                                        Post
                                    </Button>
                                    :
                                    <Button type='submit' variant='contained' disabled style={disabledButtonStyle}>
                                        Post
                                    </Button>
                            }
                        </Container>
                    </form>
                    <Grid item xs={12}>
                        <span style={subHeaderStyle}>
                          Here's what others have had to say about {politician.firstname} {politician.lastname}.
                        </span>
                        <CommentViewer commentsArray={this.state.commentsArray}/>
                    </Grid>
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
