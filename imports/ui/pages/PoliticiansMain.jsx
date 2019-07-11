import React, { Component } from 'react';
import Politicians from '../../api/Politicians';
// import PoliticiansSelect from '../components/PoliticiansSelect';
// import PoliticiansPFPContact from '../components/PoliticiansPFPContact';
// import PoliticianCommentsMade from '../components/PoliticianCommentsMade';
// import PoliticianVoteHistory from '../components/PoliticianVoteHistory';
// import PoliticianMakeAComment from '../components/PoliticianMakeAComment';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// PoliticiansMain will be where all the components go
function PoliticiansMain (props) {

  // render () {
  const classes = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }));

  console.log('politicians.jsx, this.props:', this.props);
  // let index = this.props.location.search.replace('?', '');
  // let politician = this.props.politicians[index];
  return (
    <>
      {/* main container */}
      <Container display='flex' maxWidth='lg' style={{ backgroundColor: 'green' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
  // }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('content infoContainer: ', Politicians.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  return {
    politicians: Politicians.find().fetch()
  };
})(PoliticiansMain);
