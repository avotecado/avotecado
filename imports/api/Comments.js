import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default Comments = new Mongo.Collection('Comments');

if (Meteor.isServer) {
    Meteor.publish('Comments', function commentsPublication() {
        console.log('publishing Comments');
        return Comments.find();
    });
}

Meteor.methods({
    'comments.add'(politicianID, message) {
        check(politicianID, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        console.log('inside comments.add');
        Comments.insert({
            politician: politicianID,
            user: this.userId,
            username: Meteor.users.findOne(this.userId).username,
            message: message,
            postedAt: new Date()
        });
    },
    'comments.edit'() {
        console.log('edit fn');
    },
    'comments.remove'(messageID) {
        check(messageID, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        let messagetoRemove = Comments.findOne({_id: messageID});
        if (messagetoRemove._id === this.userId) {
            Comments.remove(messageID);
        } else {
            throw new Meteor.Error('not-authorized');
        }
    },
    'comments.findByID'(politicianID) {
        check(politicianID, String);
        // console.log('in findByID');
        return Comments.find({politician: politicianID}).fetch();
    }
});
