import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import CommentViewer from './CommentViewer';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Loading from "../../../utils/Loading";
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";

const commentInputContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '3em'
};
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

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

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
                this.setState({error: err.error});
            } else {
                that.setState({commentsArray: res});
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            let that = this;
            let politician = this.props.politician;
            this.setState({politician: politician, commentsArray: []});
            Meteor.call('comments.findByID', this.props.politician._id, function (err, res) {
                if (err) {
                    this.setState({error: err.error});
                } else {
                    that.setState({commentsArray: res});
                }
            });
        }
    }

    handleMessage = (event) => {
        this.setState({messageInput: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        let messageToSend = this.state.messageInput.trim();

        if (messageToSend.length === 0) {
            this.setState({messageInput:'', error: 'Message cannot be blank.'});
            return;
        }

        let user = Meteor.userId();
        let username = Meteor.users.findOne(Meteor.userId).username;
        let politicianID = this.props.politician._id;
        let politicianName = `${this.props.politician.firstname + ' ' + this.props.politician.lastname}`;
        let postedAt = new Date();

        Meteor.call('comments.add', politicianID, politicianName, messageToSend, postedAt, (err) => {
            if (err) {
                this.setState({error: err.error, messageInput: ''});
            } else {
                this.setState({
                    error: null,
                    messageInput: '',
                    commentsArray: [...this.state.commentsArray, {user: user, username: username, message: messageToSend, postedAt: postedAt}]
                });
            }
        });
    };

    loggedInCommentSystemDisplay(politician) {
        return (
            <>
                <Grid item xs={12}>
                        <span style={subHeaderStyle}>
                            Here's what people have said about {politician.firstname} {politician.lastname}.
                        </span>
                    <CommentViewer commentsArray={this.state.commentsArray}/>
                </Grid>
                <span style={subHeaderStyle}>
                    Have something to say about {politician.firstname} {politician.lastname}?
                </span>
                <form onSubmit={this.handleSubmit}>
                    <Container style={commentInputContainerStyle}>
                        <CustomTextField
                            required name='message_Input'
                            fullWidth
                            label='Share your thoughts.'
                            style={{marginBottom: '0.1em'}}
                            value={this.state.messageInput} onChange={this.handleMessage}
                            error={this.state.error}
                            helperText={this.state.error}
                            inputProps={{ maxLength: 140 }}
                        />
                        <Button type='submit' variant='contained' style={buttonStyle}>
                            Post
                        </Button>
                    </Container>
                </form>
            </>
        );
    }

    render() {
        let politician = this.state.politician;
        if (this.state.commentsArray) {
            if (Meteor.user()) {
            return (
                <>
                    <Grid item xs={12}>
                        {this.loggedInCommentSystemDisplay(politician)}
                    </Grid>
                    <ErrorSuccessDisplay error={this.state.error} />
                </>
            );
            } else {
                return (
                    <>
                        <Grid item xs={12}>
                        <span style={subHeaderStyle}>
                            Here's what others have had to say about {politician.firstname} {politician.lastname}.
                        </span>
                            <CommentViewer commentsArray={this.state.commentsArray}/>
                        </Grid>
                    </>
                )
            }
        } else {
            return (<Loading/>);
        }
    }
}
