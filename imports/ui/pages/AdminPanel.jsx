import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import Container from "@material-ui/core/Container";
import AdminUserManagement from "../components/admin/AdminUserManagement";
import AdminCommentsSystem from "../components/admin/AdminCommentsSystem";
import Comments from "../../api/Comments";
import Ratings from "../../api/Comments";
import Grid from "@material-ui/core/Grid";
import Loading from "../../utils/Loading";

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

    componentDidMount() {
        this.setupState();
    }


    setupState() {
        if (this.props.comments && this.props.ratings) {
            this.setState({
                users: this.props.users,
                comments: this.props.comments,
                ratings: this.props.ratings,
                loading: false
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setupState();
        }
    }


    render() {
        if (Roles.userIsInRole(Meteor.user(), ['admin'])) {
            if (this.state.loading) {
                return (<Loading/>);
            } else {
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