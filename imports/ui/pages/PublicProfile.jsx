import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import Loading from "../../utils/Loading";
import CommentViewer from "../components/comments/CommentViewer";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {unescapeUser} from "../../utils/userValidation";
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";
import UserFollowedDisplay from "../components/users/UserFollowedDisplay";

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
        this.setupUserData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setupUserData();
        }
    }

    setupUserData() {
        let userId = this.props.location.search.replace('?', '');
        Meteor.call('followed.findByUser', userId, (err, followed) => {
            if (err) {
                this.setState({error: err.error});
            } else {
                let unescapedUser = unescapeUser((Meteor.users.find({_id: userId}).fetch())[0]);
                this.setState({user: unescapedUser, followed: followed});
                Meteor.call('comments.findByUser', userId, (err, comments) => {
                    if (err) {
                        this.setState({error: err.error});
                    } else {
                        this.setState({loading: false, comments: comments});
                    }
                });
            }
        });
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>);
        } else {
            return (
                <div>
                    <Container maxWidth='lg'>
                        <Grid container>
                            <Grid item xs={6}>
                                <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                                    {this.state.user.username}
                                </div>
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
                                        <UserFollowedDisplay followed={this.state.followed} />
                                    </Grid>
                                    <Grid>
                                        <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                                            Comments:
                                        </div>
                                        <CommentViewer commentsArray={this.state.comments} userProfile={true}/>
                                    </Grid>
                            </Grid>
                        </Grid>
                        <ErrorSuccessDisplay error={this.state.error} />
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
