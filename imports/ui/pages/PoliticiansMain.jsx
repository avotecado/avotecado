import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Politicians from '../../api/Politicians';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import { PoliticianContext } from '../context/PoliticianContext';
// import Async from 'react-async';

import PoliticiansSelect from '../components/PoliticiansSelect';
// import PoliticiansPFPContact from '../components/PoliticiansPFPContact';
// import PoliticianCommentsMade from '../components/PoliticianCommentsMade';
// import PoliticianVoteHistory from '../components/PoliticianVoteHistory';
// import PoliticianMakeAComment from '../components/PoliticianMakeAComment';

import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class PoliticiansMain extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: [],
      selectedPolitician: ''
    };
  }

  // static contextType = PoliticianContext;

  componentDidMount () {
    console.log('cdm:', this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('cdu:', this.props);
    if (prevProps.politiciansArray !== this.props.politiciansArray) {
      this.setState({ politiciansArray: this.props.politiciansArray });
    }
  }

  render () {
    return (
      <div>
        <Container display='flex' maxWidth='lg' style={{ marginTop: '10em' }}>
          <Grid container spacing={3}>

            <Grid item xs={12}>
              <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'DM Serif Display', fontSize: '6em', fontColor: 'rgba(0,0,0,0)', textAlign: 'center' }}>
                  2019
                  <br />
                  Councillors
                </span>
                <span >Take a look at your Vancouver City Council members, see how they vote, and maybe leave a comment.</span>
              </Container>
            </Grid>

            <Grid item xs={12}>
              <Container maxWidth='md' style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <PoliticiansSelect politiciansArray={this.props.politiciansArray} />
              </Container>
            </Grid>

            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper>xs=3</Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

// export default PoliticiansMain;
export default withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('onReady'); },
    onError: function () { console.log('onError'); }
  });
  return { politiciansArray: Politicians.find().fetch() };
})(PoliticiansMain);
