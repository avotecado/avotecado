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
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        let messageToRemove = Comments.findOne({_id: messageID});
        if (messageToRemove._id === this.userId) {
            Comments.remove(messageID);
        } else {
            throw new Meteor.Error('not-authorized');
        }
    },
    'comments.findByID'(politicianID) {
        check(politicianID, String);
        return Comments.find({politician: politicianID}).fetch();
    },
    'comments.getAll'() {
        return Comments.find({}).fetch();
    }
});
