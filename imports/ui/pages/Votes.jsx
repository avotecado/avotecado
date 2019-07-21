import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import VoteCollection from '/imports/api/VoteCollection';

import VoteTable from '../components/VoteTable';

import { Container } from '@material-ui/core';

export class Votes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      votes: null,
      politicianArray: []
    };
  }

  componentDidMount () {
    Meteor.call('politicians.getAll', null, (err, res) => { return err ? console.log(err.reason) : this.setState({ politicianArray: res }); });
    console.log('cdm votes:', this.props.votes);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps !== this.props) {
      console.log('cdu this.props', this.props);
      this.setState({ loading: false, votes: this.props.votes });
    }
  }

  render () {
    if (!this.state.loading && this.state.votes) {
      console.log('render this.props.votes', this.props.votes);
      return (
        <div>
          <Container>
            nada
            <VoteTable politicians={this.state.politicianArray} votes={this.props.votes} />
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            Loading...
          </Container>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('VoteCollection', {
    onReady: function () { console.log('onReady', VoteCollection.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  return { votes: VoteCollection.find().fetch() };
})(Votes);
