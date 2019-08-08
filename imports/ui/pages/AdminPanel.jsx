import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import {Redirect} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AdminCommentsSystem from "../components/admin/AdminCommentsSystem";

import Comments from "../../api/Comments";

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
        if (prevProps !== this.props) {
            console.log(this.props);
            if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
                Meteor.call('ratings.getAll', (err, ratings) => {
                    if (err) {
                        console.log(err.reason);
                    } else {
                        this.setState({
                            loading: false,
                            ratings: ratings,
                            users: this.props.users
                        });
                    }
                });
            }
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
                let comments = this.props.comments;
                return (
                    <div>
                        <Container>
                            <AdminCommentsSystem comments={comments}/>
                        </Container>
                    </div>
                );
            }
        } else {
            return (
                <>
                    E
                </>);
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('UsersList');
    Meteor.subscribe('Comments');
    return {
        users: Meteor.users.find({}).fetch(),
        comments: Comments.find().fetch()
    };
})(AdminPanel);