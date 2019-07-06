import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import HelloComponent from './HelloComponent';
import { withTracker } from 'meteor/react-meteor-data';
import { Politicians } from '../../api/politicians';
import { Tracker } from 'meteor/tracker';

class HelloPage extends Component {
  render () {
    console.log('this.props:', this.props);

    // let handler = Meteor.subscribe('Politicians');
    // console.log('this.props for helloPage:', this.props);
    // setTimeout(console.log(this.props), 1000);
    return (
      <div>
        <Card>
          <CardContent>
            Hello
            {/* <HelloPageContainer /> */}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withTracker(() => {
  console.log('in withTracker');
  // Tracker.autorun(() => {
  let handler = Meteor.subscribe('Politicians');
  // while (!Politicians) { console.log('help'); }
  return { PoliticiansProp: Politicians };
  // });
})(HelloPage);
