import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default VoteCollection = new Mongo.Collection('VoteCollection');

if (Meteor.isServer) {
    Meteor.publish('VoteCollection', function followVoteCollections() {
        console.log('publishing VoteCollections');
        return VoteCollection.find();
    });
}

Meteor.methods({
    'vote.getByID'(id) {
        check(id, String);
        VoteCollection.find({_id: id}).fetch();
    }
});
