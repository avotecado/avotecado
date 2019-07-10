import React, { Component } from 'react';
// import Card from '../components/Card';
import Politicians from '../../api/Politicians';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class PoliticianContent extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('politicians.jsx, this.props:', this.props);
    let index = this.props.location.search.replace('?', '');
    let politician = this.props.politicians[index];
    return (
      <div className='content'>
        hello
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
})(PoliticianContent);
