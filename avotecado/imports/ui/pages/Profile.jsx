import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Followed from '/imports/api/followed';

class Profile extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div>
        <Typography>Settings</Typography>
        <Card>
          <CardContent>
            Following:
            <List>
              <ListItem />
            </List>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Followed', {
    onReady: function () { console.log('userID: ', Meteor.user()._id, 'followed: ', Followed.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  return {
    followed: Followed.findOne(Meteor.user()._id)
  };
})(Profile);
