import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        console.log(this.props);
        let userId = this.props.location.search.replace('?', '');
        console.log(userId);
        let user = (Meteor.users.find({_id: userId}).fetch());
        this.setState({loading: false, user: user});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log(this.props);
            let userId = this.props.location.search.replace('?', '');
            console.log(userId);
            let user = (Meteor.users.find({_id: userId}).fetch());
            this.setState({loading: false, user: user});
        }
    }

    render() {
        if (this.state.loading) {
            return (<>Loading...</>);
        } else {
            let user = JSON.stringify(this.state.user);
            return (
                <div>
                    {user}
                </div>
            );
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
})(PublicProfile);
