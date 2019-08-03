import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";

class PublicProfile extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log(this.props);
            let userId = this.props.location.search.replace('?', '');
            console.log(userId);
            console.log(Meteor.users.find({_id: userId}).fetch());
        }
    }

    render() {
        return (
            <div>
                ()
            </div>
        )
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
