import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import {Meteor} from "meteor/meteor";
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";
import CardContent from '@material-ui/core/CardContent';
import {helveticaBlackExtended_1p5em} from "../../styles";

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
                this.setState({error: err.error});
            } else {
                let tempState = this.state.comments;
                tempState.filter((comment) => { return comment._id!== _id});
                this.setState({comments: tempState});
            }
        });

    }

    render() {
        if (this.state.loading) {
            return (
                <>
                    Loading Comments...
                </>
            );
        }
        else {
            let comments = this.state.comments;
            return (
                <>
                    <span style={helveticaBlackExtended_1p5em}>
                        Comments
                    </span>
                    <div style={{maxHeight: '35em', overflowY:'auto'}}>
                        {comments.map((comment, index) => {
                            return (
                                <Card style={{marginBottom: '1em'}} key={index}>
                                    <CardContent>
                                        User: {comment.username} <br/>
                                        Message: {comment.message} <br/>
                                        Politician: {comment.politicianName} <br/>
                                        <span style={{fontWeight:'bold', color:'red', cursor: 'pointer'}}
                                              onClick={() => this.deleteMessage(comment._id)}>
                                            Delete Message
                                        </span><br/>
                                    </CardContent>
                                </Card>
                            )
                        }
                    )}
                    </div>
                    <ErrorSuccessDisplay error={this.state.error} />
                </>
            );
        }
    }

}

export default AdminCommentsSystem;