import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Politicians = new Mongo.Collection('Politicians');

Meteor.methods({
  'politicians.getAll'() {
    return Politicians.find({}).fetch();
  },
  'politicians.getParties'() {
    return Politicians.rawCollection().distinct('party');
  },
  'politicians.findByParty'(party) {
    check(party, String);
    return Politicians.find({ party: party }).fetch();
  },
  'politicians.findByID'(politicianID) {
    check(politicianID, String);
    return Politicians.find({ _id: politicianID }).fetch();
  }
});
