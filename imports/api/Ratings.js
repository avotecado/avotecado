import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default Ratings = new Mongo.Collection('Ratings');

if (Meteor.isServer) {
    Meteor.publish('Ratings', function ratingsPublication() {
        return Ratings.find();
    });
}

Meteor.methods({
    'ratings.add'(politicianID, userRating) {
        check(politicianID, String);
        check(userRating.userId, String);
        check(userRating.rating, Number);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        Ratings.upsert({
                pid: politicianID,
                userId: userRating.userId
            },{
            $set: {
                pid: politicianID,
                userId: userRating.userId,
                rating: userRating.rating
            }
        });
    },
    'ratings.removeAllByUser'(userId) {
        if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
            throw new Meteor.Error('not-authorized');
        }
        check(userId, String);
        Ratings.remove({userId: userId});
    }
});
