import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Meteor} from "meteor/meteor";

class AdminCommentsSystem extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        };
        this.deleteMessage=this.deleteMessage.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({
                loading: false,
                comments: this.props.comments
            });
        }
    }

    deleteMessage(_id) {
        Meteor.call('comments.remove', _id, (err) => {
            if (err) {
                console.log(err.error);
            } else {
                let tempState = this.state.comments;
                tempState.filter((comment) => { return comment._id!== _id});
                this.setState({comments: tempState});
            }
        });

    }

    render() {
        console.log(this.state.comments);
        if (this.state.loading) {
            return (
                <>
                    Loading Comments...
                </>
            );
        }
        else {
            let comments = this.state.comments;
            console.log(comments);
            return (
                <>
                    <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black'}}>
                        Comments
                    </span>
                    <div style={{maxHeight: '35em', overflowY:'auto'}}>
                    {comments.map((comment, index) => {
                            return (
                                <Card style={{marginBottom: '1em'}} key={index}>
                                    User: {comment.username} <br/>
                                    Message: {comment.message} <br/>
                                    Politician: {comment.politicianName} <br/>
                                    <span style={{fontWeight:'bold', color:'red', cursor: 'pointer'}}
                                          onClick={() => this.deleteMessage(comment._id)}>
                                        Delete Message
                                    </span><br/>
                                </Card>
                            )
                        }
                    )}
                    </div>
                </>
            );
        }
    }

}

export default AdminCommentsSystem;