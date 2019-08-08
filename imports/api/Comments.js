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
    'comments.add'(politicianID, politicianName, message) {
        check(politicianID, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Comments.insert({
            politician: politicianID,
            politicianName: politicianName,
            user: this.userId,
            username: Meteor.users.findOne(this.userId).username,
            message: message,
            postedAt: new Date()
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
    'comments.findByID'(politicianID) {
        check(politicianID, String);
        return Comments.find({politician: politicianID}).fetch();
    },
    'comments.getAll'() {
        return Comments.find({}).fetch();
    }
});
