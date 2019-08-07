import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default Party = new Mongo.Collection('Party');

if (Meteor.isServer) {
    Meteor.publish('Party', function followPublication() {
        return Party.find();
    });
}

Meteor.methods({
    'party.getByID'(id) {
        check(id, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Party.find({_id: id}).fetch();
    }
});