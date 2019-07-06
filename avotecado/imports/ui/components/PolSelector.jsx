import React, { Component } from 'react';
import PolBar from './PolBar';
import { Link } from 'react-router-dom';
import Politicians from '/imports/api/politicians';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class PolList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: [1, 2, 3]
    };
  }

  render () {
    console.log('\n');
    console.log('this.props: ', this.props);

    return (
      <div id='polSelector'>
        {this.props.politicians.map((politician, index) => (

          <Link to={'/Content?' + index} key={index}>
            <PolBar key={index} firstname={politician.firstname} lastname={politician.lastname} party={politician.party} />
          </Link>
        ))}
      </div>
    );
  }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () {
      let polArray = Politicians.find().fetch();
      return polArray;
    },
    onError: function () { console.log('onError'); }
  });
  return {
    politicians: Politicians.find().fetch()
  };
})(PolList);
