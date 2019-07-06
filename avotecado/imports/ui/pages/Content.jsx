import React, { Component } from 'react';
import Card from '../components/Card';
import Politicians from '/imports/api/politicians';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class Content extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log('content.jsx, this.props:', this.props);
    let index = this.props.location.search.replace('?', '');
    let politician = this.props.politicians[index];
    return (
      <div className='content'>
        <Card selectedPolitician={politician} />
      </div>
    );
  }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('content infoContainer: ', Politicians.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  return {
    politicians: Politicians.find().fetch()
  };
})(Content);
