import {Meteor} from 'meteor/meteor';
import Comments from '/imports/api/Comments';
import Followed from '/imports/api/Followed';
import Politicians from '/imports/api/Politicians';
import PartyCollection from '/imports/api/Party';
import Ratings from '/imports/api/Ratings';
import VoteCollection from '/imports/api/VoteCollection';
import {check} from "meteor/check";

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

    if (Ratings.find().count() === 0) {
        const data = Assets.getText('ratings.json');
        JSON.parse(data).ratings.forEach((entry) => {
            Ratings.insert(entry);
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
        let alphaNumericRegex = /^[0-9A-Z]+$/i;
        if (!(alphaNumericRegex.test(user.username))) {
            throw new Meteor.Error('malformed-username')
        }

        for (const key of Object.keys(options)) {
            let value = options[key];
            if (value && key !== 'password') {
                if (value.length > 140) {
                    throw new Meteor.Error('too-long-error');
                }
            }
        }

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

        customizedUser.roles = ['normal-user'];

        if (user.username === 'admin') {
            customizedUser.roles = ['admin'];
        }
        return customizedUser;
    });

    Meteor.methods({
        'user.updateUserProfile'(updateObject) {
            if (!Meteor.userId) {
                throw new Meteor.Error('not-authorized');
            }

            for (const key of Object.keys(updateObject)) {
                let value = updateObject[key];
                if (value) {
                    check(value, String);
                }
            }

            if (Object.keys(updateObject).length === 0 && updateObject.constructor === Object) {
                updateObject = {name: '', occupation: '', politicalLeaning: '', prefParty: '', userBio: ''}
            }

            return Meteor.users.update({_id: Meteor.userId()}, {
                $set: {
                    "name": updateObject.name,
                    "occupation": updateObject.occupation,
                    "politicalLeaning": updateObject.politicalLeaning,
                    "prefParty": updateObject.prefParty,
                    "userBio": updateObject.userBio
                }
            });
        }
    });

    // ref: https://forums.meteor.com/t/allow-user-to-delete-their-own-account/33307/4
    Meteor.methods({
        'adminDeleteUser'(userId) {
            if (!Meteor.isServer) return;
            if (!Roles.userIsInRole(Meteor.user(), ['admin'])) {
                throw new Meteor.Error('not-authorized');
            }
            try {
                Meteor.users.remove(userId);
            } catch (e) {
                // handle this however you want
                throw new Meteor.Error('self-delete', 'Failed to remove yourself');
            }
        }
    });


    Meteor.publish('AdminUsersList', function () {
        return Meteor.users.find({}, {
            fields: {
                roles: 1,
                emails: 1,
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

    Meteor.publish('UsersList', function () {
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

    Meteor.publish('SingleUser', function () {
        return Meteor.users.find({_id: Meteor.userId()}, {
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
