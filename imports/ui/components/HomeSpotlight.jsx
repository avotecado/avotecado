import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Politicians from '../../api/Politicians';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class HomeSpotlight extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politician: []
    };
  }

  componentDidMount () {
    this.setState({ politician: this.props.politician });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.politician !== this.props.politician) {
      this.setState({ politician: this.props.politician });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ politician: nextProps.politician });
  }

  render () {
    console.log(this.props);
    // let spotlightPolitician;
    // spotlightPolitician = this.state.politician[Math.floor(Math.random() * this.state.politician.length)];
    // console.log(spotlightPolitician);
    return (
      <div>
        <Grid item xs={4} />
        <Grid item xs={8} />
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('onReady'); },
    onError: function () { console.log('onError'); }
  });
  return { politician: Politicians.find().fetch() };
})(HomeSpotlight);
