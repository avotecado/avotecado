import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import Loading from "../../utils/Loading";
import CommentViewer from "../components/comments/CommentViewer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {unescapeUser} from "../../utils/unescapeUserInfo";

function getUsersFollowedList() {
    let userId = this.props.location.search.replace('?', '');
    Meteor.call('followed.findByUser', userId, (err, followed) => {
        if (err) {
            console.log(err.error);
        } else {
            let user = (Meteor.users.find({_id: userId}).fetch());
            let unescapedUser = unescapeUser(user[0]);
            this.setState({user: unescapedUser, followed: followed});
            Meteor.call('comments.findByUser', userId, (err, comments) => {
                if (err) {
                    console.log(err.error);
                } else {
                    this.setState({loading: false, comments: comments});
                }
            });
        }
    });
}

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            followed: [],
            comments: []
        }
    }

    componentDidMount() {
        getUsersFollowedList.call(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            getUsersFollowedList.call(this);
        }
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>);
        } else {
            let f = JSON.stringify(this.state.followed);
            return (
                <div>
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid item xs={6}>
                                <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>{this.state.user.username}</div>
                                <>Name: {this.state.user.name}</> <br/>
                                <>Date of Birth: {this.state.user.dob}</> <br/>
                                <>Occupation: {this.state.user.occupation}</> <br/>
                                <>Political Leaning: {this.state.user.politicalLeaning}</> <br/>
                                <>Preferred Local Party: {this.state.user.prefParty}</> <br/>
                                <>User Bio: {this.state.user.userBio}</> <br/>
                            </Grid>
                            <Grid container style={{display: 'flex', flexDirection:'column'}}>
                                    <Grid>
                                        <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                                            Followed:
                                        </div>
                                        {f}
                                    </Grid>
                                    <Grid>
                                        <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                                            Comments:
                                        </div>
                                        <CommentViewer commentsArray={this.state.comments} userProfile={true}/>
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('UsersList');
    return {users: Meteor.users.find({}).fetch()};
})(PublicProfile);
