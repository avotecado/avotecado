import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AdminUserManagement from "../components/admin/AdminUserManagement";
import AdminCommentsSystem from "../components/admin/AdminCommentsSystem";

import Comments from "../../api/Comments";
import Ratings from "../../api/Comments";
import Grid from "@material-ui/core/Grid";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            comments: [],
            ratings: [],
            users: []
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({
                users: this.props.users,
                comments: this.props.comments,
                ratings: this.props.ratings,
                loading: false
            });
        }
    }


    render() {
        if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
            if (this.state.loading) {
                return (
                    <>
                        <Container>
                            Loading...
                        </Container>
                    </>
                );
            } else {
                // console.log('props.users', this.props.users);
                console.log('state.comments', this.state.comments);
                console.log('props.comments', this.props.comments);
                // console.log('state.ratings', this.state.ratings);
                // console.log('props.ratings', this.props.ratings);
                return (
                    <div>
                        <Container>
                            <Grid container>
                                <Grid item xs={6}>
                                    <AdminUserManagement users={this.state.users}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <AdminCommentsSystem comments={this.state.comments}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                );
            }
        } else {
            return (
                <>
                    <Container>
                    You don't belong here.
                    </Container>
                </>
                );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('AdminUsersList');
    Meteor.subscribe('Comments');
    Meteor.subscribe('Ratings');
    return {
        users: Meteor.users.find({}).fetch(),
        comments: Comments.find().fetch(),
        ratings: Ratings.find().fetch()
    };
})(AdminPanel);