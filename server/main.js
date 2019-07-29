import {Meteor} from 'meteor/meteor';
import Politicians from '/imports/api/Politicians';
import PartyCollection from '/imports/api/Party';
import VoteCollection from '/imports/api/VoteCollection';
import Comments from '/imports/api/Comments';
import Followed from '/imports/api/Followed';

/**
 * Refs:
 *   https://docs.meteor.com/api/assets.html
 *   https://eureka.ykyuen.info/2015/02/19/meteor-insert-sample-data-if-the-mongodb-is-empty/
 *   https://docs.meteor.com/api/accounts-multi.html#AccountsServer-onCreateUser
 *   https://forums.meteor.com/t/i-dont-still-understand-how-accounts-createuser-accouncts-oncreateuser-works/28908/3
 **/

Meteor.startup(() => {
    if (Politicians.find().count() === 0) {
        const data = Assets.getText('politicianData.json');
        JSON.parse(data).politicians.forEach((entry) => {
            Politicians.insert(entry);
        });
    }

    if (PartyCollection.find().count() === 0) {
        const data = Assets.getText('partyData.json');
        JSON.parse(data).party.forEach((entry) => {
            PartyCollection.insert(entry);
        });
    }

    if (VoteCollection.find().count() === 0) {
        const data = Assets.getText('votingHistoryData.json');
        JSON.parse(data).voteHistory.forEach((entry) => {
            VoteCollection.insert(entry);
        });
    }

    Meteor.users.deny({
        update() {
            return true;
        }
    });

    Accounts.onCreateUser((options, user) => {
        const customizedUser = Object.assign({
            name: options.name,
            dob: options.dob,
            occupation: options.occupation,
            prefParty: options.prefParty,
            politicalLeaning: options.politicalLeaning,
            userBio: options.userBio
        }, user);
        if (options.profile) {
            customizedUser.profile = options.profile;
        }
        return customizedUser;
    });

    Meteor.publish('UsersList', function () {
        console.log('publishing UsersList');
        return Meteor.users.find({}, {
            fields: {
                username: 1,
                name: 1,
                dob: 1,
                occupation: 1,
                prefParty: 1,
                politicalLeaning: 1,
                userBio: 1,
                createdAt: 1
            }
        });
    });
});
