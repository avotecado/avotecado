import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default Comments = new Mongo.Collection('Comments');

if (Meteor.isServer) {
    Meteor.publish('Comments', function commentsPublication() {
        return Comments.find();
    });
}

Meteor.methods({
    'comments.add'(politicianID, politicianName, messageToSend, postedAt) {
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        let message = messageToSend.trim();

        check(politicianID, String);
        check(message, String);

        if (message.length <= 0 || message.length > 140) { throw new Meteor.Error('malformed-message'); }

        Comments.insert({
            politician: politicianID,
            politicianName: politicianName,
            user: this.userId,
            username: Meteor.users.findOne(this.userId).username,
            message: message,
            postedAt: postedAt
        });
    },
    'comments.remove'(messageID) {
        check(messageID, String);
        if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
            throw new Meteor.Error('not-authorized');
        }
        Comments.remove(messageID);
    },
    'comments.removeAllByUser'(userId) {
        check(userId, String);
        if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
            throw new Meteor.Error('not-authorized');
        }
        Comments.remove({user: userId});
    },
    'comments.findByUser'(userId) {
        check(userId, String);
        return Comments.find({user: userId}).fetch();
    },
    'comments.findByID'(politicianID) {
        check(politicianID, String);
        return Comments.find({politician: politicianID}).fetch();
    }
});
