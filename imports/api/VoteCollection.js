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
        return VoteCollection.find({_id: id}).fetch();
    },
    'vote.getAll'() {
        return VoteCollection.find().fetch();
    },
    'vote.voteByPolitician'(voteByPoliticianObject) {
        let politicianID = voteByPoliticianObject.politicianID;
        let votesArray = voteByPoliticianObject.votesArray;
        check(politicianID, String);
        for (let i = votesArray.length; i-- > 0;) {
            votesArray[i].votes = votesArray[i].votes[politicianID];
        }
        return votesArray;
    },
    'vote.voteByPoliticians'(voteByPoliticianObject) {
        let politicianIDArray = voteByPoliticianObject.politicianID;
        let votesArray = voteByPoliticianObject.votesArray;
        for (let i = politicianIDArray.length; i-- > 0;) {
            check(politicianIDArray[i], String);
        }
        for (let i = votesArray.length; i-- > 0;) {
            let arrayToInsertPoliticianVote = new Array(11);
            let currentVoteArray = votesArray[i].votes;
        }
        return votesArray;
    }
});
