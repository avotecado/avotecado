import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export default Ratings = new Mongo.Collection('Ratings');

if (Meteor.isServer) {
    Meteor.publish('Ratings', function ratingsPublication() {
        console.log('publishing Ratings');
        return Ratings.find();
    });
}

Meteor.methods({
    'ratings.add'(politicianID, userRating) {
        check(politicianID, String);
        check(userRating.rating, Number)
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        console.log('inside ratings.add');
        Ratings.upsert({_id: politicianID}, {$push: {ratings: userRating}});

    },
    'ratings.findByID'(politicianID) {
        check(politicianID, String);
        return Ratings.find({_id: politicianID}).fetch();
    },
    'ratings.findAll'() {
        return Ratings.find({}).fetch();
    },
    'ratings.findNewestByID'(politicianID) {
        check(politicianID, String);
        return Ratings.find({_id: politicianID}).sort({$natural:1}).limit(1);
    }
});
