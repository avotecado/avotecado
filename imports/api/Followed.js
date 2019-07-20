import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export default Followed = new Mongo.Collection('Followed');

if (Meteor.isServer) {
  Meteor.publish('Followed', function followPublication () { return Followed.find(); });
}

Meteor.methods({
  'followed.add' (politicianID) {
    check(politicianID, String);
    if (!this.userId) { throw new Meteor.Error('not-authorized'); }
    Followed.upsert({ _id: this.userId }, { $push: { following: politicianID } });
  },
  'followed.remove' (politicianID) {
    check(politicianID, String);
    if (!this.userId) { throw new Meteor.Error('not-authorized'); }
    Followed.update({ _id: this.userId }, { $pull: { following: politicianID } });
  }
});
