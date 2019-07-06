import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // margin: theme.spacing(2)
  },
  paper: {
    margin: 'auto',
    backgroundColor: 'white'
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block'
  }
}));

const photoName = (firstname, lastname) => {
  let output = 'photos/' + firstname + '_' + lastname + '_40.png';
  return output.replace(' ', '_');
};

export default function PolBarContent (props) {
  let politician = props.selectedPolitician;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container width={1 / 4} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='complex' src={photoName(politician.firstname, politician.lastname)} width='40' />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography variant='h3'>
                  {politician.firstname} {politician.lastname}
                </Typography>
                <Typography gutterBottom variant='h5'>
                  {politician.party}
                </Typography>
                <Typography variant='body2'>{politician.twitter} {politician.website} {politician.facebook} {politician.linkedin} {politician.instagram}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
