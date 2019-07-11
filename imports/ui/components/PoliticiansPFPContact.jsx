import React from 'react';

import Politicians from '../../imports/api/politicians';
import Followed from '/imports/api/followed';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Card extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    // console.log('Selected passed to card: ', this.props.selectedPolitician);
    console.log('this.props at card: ', this.props);

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg' >
          <Typography component='div' >
            hey
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Followed', {
    onReady: function () { console.log('card infoContainer: ', Followed.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  let userID;
  console.log('user: ', userID);
  if (Meteor.user()) {
    userID = Meteor.user()._id;
    console.log('user: ', userID);
    if (userID && !Followed.findOne(userID)) {
      console.log('why');
      Followed.insert({
        _id: userID,
        following: []
      });
    }
  }
  return {
    followedCollection: Followed,
    userID: userID
  };
})(Card);
