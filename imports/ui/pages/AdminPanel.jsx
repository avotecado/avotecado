import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        if (true) {
            Meteor.call('comments.getAll', null, (err, res) => {
                if (err) {
                    console.log(err.reason);
                } else {
                    let comments = res;
                    Meteor.call('ratings.getAll', null, (err, res) => {
                        if (err) {
                            console.log(err.reason);
                        } else {
                            let ratings = res;
                            console.log(comments);
                            console.log(ratings);
                            console.log(this.props.users);
                            this.setState({
                                loading: false,
                                comments: comments,
                                ratings: ratings,
                                users: this.props.users
                            });
                        }
                    });
                }
            });
        }
    }


    render() {
        if (true) {
            if (this.state.loading) {
                return (
                    <>
                        Loading...
                    </>
                );
            } else {
                return (
                    <div>

                    </div>
                );
            }
        } else {
            //
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('UsersList', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    return {users: Meteor.users.find({}).fetch()};
})(AdminPanel);