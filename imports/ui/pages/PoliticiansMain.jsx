import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Politicians from '../../api/Politicians';

// import { PoliticianContext } from '../context/PoliticianContext';
// import Async from 'react-async';

import PoliticianHeaderText from '../components/PoliticianHeaderText';
import PoliticiansSelect from '../components/PoliticiansSelect';
import PoliticiansPFP from '../components/PoliticiansPFP';
import PoliticianContact from '../components/PoliticianContact';
// import PoliticianCommentsMade from '../components/PoliticianCommentsMade';
// import PoliticianVoteHistory from '../components/PoliticianVoteHistory';
import PoliticianMakeAComment from '../components/PoliticianMakeAComment';

import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
    if ((prevProps !== this.props) && (this.props.location !== '')) {
      let selectedPolitician = this.props.location.search.replace('?', '');
      console.log('selectedPolitician: ', selectedPolitician);
      this.setState({ selectedPolitician: selectedPolitician });
    }
  }

  render () {
    let politiciansArray = this.props.politiciansArray;
    console.log(politiciansArray);
    let selectedPolitician = this.state.selectedPolitician;
    let politician = politiciansArray.find(function (element) { return (element._id === selectedPolitician); });
    console.log(politician);
    if (!this.state.selectedPolitician) {
      return (
      <>
        <Container display='flex' maxWidth='lg' style={{ marginTop: '0em' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <PoliticianHeaderText />
            </Grid>
            <Grid item xs={12}>
              <Container maxWidth='md' style={{ display: 'flex', flexFlow: 'row wrap' }}>
                <PoliticiansSelect politiciansArray={politiciansArray} />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </>);
    } else {
      return (
        <>
          <Container display='flex' maxWidth='lg' style={{ marginTop: '0em' }}>
            <Grid container spacing={3}>

              <Grid item xs={12}>
                <PoliticianHeaderText />
              </Grid>

              <Grid item xs={12}>
                <Container maxWidth='md'>
                  <PoliticiansSelect politiciansArray={politiciansArray} />
                </Container>
              </Grid>

              <Grid item xs={6}>
                <PoliticiansPFP politician={politician} />
              </Grid>
              <Grid item xs={6}>
                <PoliticianContact politician={politician} />
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
              <Grid alignItems='center' item xs={12} >
                <span style={{ fontFamily: 'DM Serif Display', fontSize: '1.25em', fontColor: '#009245', textAlign: 'center', marginBottom: '-0.2em' }}>
                  Have something to say about {politician.firstname} {politician.lastname}?
                </span>
                <PoliticianMakeAComment />
              </Grid>
            </Grid>
          </Container>
        </>
      );
    }
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
