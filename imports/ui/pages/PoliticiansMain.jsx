import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Politicians from '../../api/Politicians';
import Followed from '../../api/Followed';
import Comments from '../../api/Comments';

// import { PoliticianContext } from '../context/PoliticianContext';
// import Async from 'react-async';

import PoliticianHeaderText from '../components/politicians/PoliticianHeaderText';
import PoliticiansSelect from '../components/politicians/PoliticiansSelect';
import PoliticiansPFP from '../components/politicians/PoliticiansPFP';
import PoliticianFollow from '../components/politicians/PoliticianFollow';
import PoliticianContact from '../components/politicians/PoliticianContact';
// import PoliticianVoteHistory from '../components/politicians/PoliticianVoteHistory';
import PoliticianCommentSystem from '../components/politicians/PoliticianCommentSystem';

import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

class PoliticiansMain extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: [],
      followedArray: [],
      selectedPolitician: ''
    };
  }

  // static contextType = PoliticianContext;

  componentDidMount () {
    // console.log('cdm:', this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    // console.log('cdu @ politiciansMain.jsx:', this.props);
    if (prevProps.politiciansArray !== this.props.politiciansArray) {
      this.setState({ politiciansArray: this.props.politiciansArray });
    }
    if (prevProps.followedArray !== this.props.followedArray) {
      this.setState({ followedArray: this.props.followedArray });
    }
    if ((prevProps !== this.props) && (this.props.location !== '')) {
      let selectedPolitician = this.props.location.search.replace('?', '');
      // console.log('selectedPolitician: ', selectedPolitician);
      this.setState({ selectedPolitician: selectedPolitician });
    }
  }

  render () {
    let PFPStyle = { display: 'flex', alignItems: 'center', flexFlow: 'column wrap' };
    let contactStyle = { display: 'flex', justifyContent: 'center', flexFlow: 'column wrap' };
    // let subHeaderStyle = { fontFamily: 'Fact-ExpandedBlack', fontSize: '1.25em', fontWeight: 'bold', fontColor: '#009245', textAlign: 'center', marginBottom: '-0.2em' };
    let politiciansArray = this.props.politiciansArray;
    let followedArray = this.props.followedArray;

    let userID = Meteor.userId();

    let selectedPolitician = this.state.selectedPolitician;
    let politician = politiciansArray.find(function (element) { return (element._id === selectedPolitician); });

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
      if (this.state.followedArray) {
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
                  {Meteor.user() && this.props.followedArray ? <PoliticianFollow politician={politician} followedArray={followedArray} userID={userID} /> : null }
                </Grid>

                <Grid item xs={6} style={contactStyle}>
                  <PoliticianContact politician={politician} />
                </Grid>

                <Grid item xs={12} style={{ marginTop: '1em' }} />

                <Grid item xs={12} >
                  <PoliticianCommentSystem politician={politician} />
                </Grid>

              </Grid>
            </Container>
          </>
        );
      }
    }
  }
}

// export default PoliticiansMain;
export default withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('onReady Politicians'); },
    onError: function () { console.log('onError Politicians'); }
  });
  Meteor.subscribe('Followed', {
    onReady: function () { console.log('onReady Followed'); },
    onError: function () { console.log('onError Followed'); }
  });
  Meteor.subscribe('Comments', {
    onReady: function () { console.log('onReady Comments'); },
    onError: function () { console.log('onError Comments'); }
  });
  return {
    politiciansArray: Politicians.find().fetch(),
    followedArray: Followed.find({ _id: Meteor.userId() }).fetch(),
    commentsArray: Comments };
})(PoliticiansMain);
