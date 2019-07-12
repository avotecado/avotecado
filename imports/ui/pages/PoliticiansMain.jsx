import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import Politicians from '../../api/Politicians';

// import { PoliticianContext } from '../context/PoliticianContext';
// import Async from 'react-async';

import PoliticianHeaderText from '../components/politicians/PoliticianHeaderText';
import PoliticiansSelect from '../components/politicians/PoliticiansSelect';
import PoliticiansPFP from '../components/politicians/PoliticiansPFP';
import PoliticianContact from '../components/politicians/PoliticianContact';
// import PoliticianComments from '../components/politicians/PoliticianComments';
// import PoliticianVoteHistory from '../components/politicians/PoliticianVoteHistory';
import PoliticianMakeAComment from '../components/politicians/PoliticianMakeAComment';

import { Container } from '@material-ui/core';
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
    let PFPStyle = { display: 'flex', alignItems: 'center', flexFlow: 'column wrap' };
    let ContactStyle = { display: 'flex', justifyContent: 'center', flexFlow: 'column wrap' };
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
      </>
      );
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

              <Grid item xs={6} style={PFPStyle}>
                <PoliticiansPFP politician={politician} />
                Follow
              </Grid>

              <Grid item xs={6} style={ContactStyle}>
                <PoliticianContact politician={politician} />
              </Grid>

              <Grid item xs={12} style={{ marginTop: '1em' }} />

              <Grid item xs={12} >
                <span style={{ fontFamily: 'DM Serif Display', fontSize: '1.25em', fontWeight: 'bold', fontColor: '#009245', textAlign: 'center', marginBottom: '-0.2em' }}>
                  Here's what others have had to say about {politician.firstname} {politician.lastname}.
                </span>
                {/* <PoliticianComments /> */}
              </Grid>

              <Grid item xs={12} >
                <span style={{ fontFamily: 'DM Serif Display', fontSize: '1.25em', fontWeight: 'bold', fontColor: '#009245', textAlign: 'center', marginBottom: '-0.2em' }}>
                  Have something to say about {politician.firstname} {politician.lastname}?
                </span>
                <PoliticianMakeAComment politician={politician} />
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
