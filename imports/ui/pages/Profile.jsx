import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Politicians from '/imports/api/Politicians';
import Followed from '/imports/api/Followed';

class Profile extends React.Component {
  render () {
    let filteredArray = this.props.filteredArray;
    console.log(filteredArray);
    if (filteredArray.length > 0) {
      return (
        <div>
          <Typography>Settings</Typography>
          <Card>
            <CardContent>
              Following:
              <List>
                {filteredArray.map((politician, index) => (
                  <ListItemText key={index} >{politician.firstname} {politician.lastname}</ListItemText>
                ))}
              </List>
            </CardContent>
          </Card>
        </div>
      );
    } else {
      return (
        <div>nothing 2 see here</div>
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('Followed', {
    onReady: function () { console.log('onReady'); },
    onError: function () { console.log('onError'); }
  });
  let filteredArray = [];
  if (Meteor.userId()) {
    let followedArray = Followed.findOne(Meteor.user()._id).following;
    let politicianArray = Politicians.find().fetch();
    filteredArray = politicianArray.filter(politician => followedArray.includes(politician._id));
  }
  return {
    loggedIn: Meteor.user(),
    filteredArray: filteredArray
  };
})(Profile);
