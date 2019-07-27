import React, {Component} from 'react';
import Followed from '/imports/api/Followed';
import Comments from '/imports/api/Comments';
import {withTracker} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

class LoginComponent extends Component {
    render() {
        console.log(this.props.user);
        console.log(this.props);
        return (
            <div>
                {this.props.user ? this.props.user._id : 'no user id available'}
                <br/>
                {this.props.user ? this.props.user.username : 'no username available'}
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('FollowedAndComments', {
        onReady: function () {
            console.log('card infoContainer: ', Followed.find().fetch());
        },
        onError: function () {
            console.log('onError');
        }
    });
    let userID;
    console.log('user: ', userID);
    if (Meteor.user()) {
        userID = Meteor.user()._id;
        console.log('user: ', userID);
        if (userID && !Followed.findOne(userID)) {
            Followed.insert({
                _id: userID,
                following: []
            });
        }
    }
    return {
        user: Meteor.user()
    };
})(LoginComponent);
