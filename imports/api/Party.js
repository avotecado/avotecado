import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export default Party = new Mongo.Collection('Party');

if (Meteor.isServer) {
    Meteor.publish('Party', function followPublication() {
        return Party.find();
    });
}