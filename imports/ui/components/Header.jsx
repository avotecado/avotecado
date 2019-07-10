import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '-1em',
    marginBottom: '8vw',
    height: '2em',
    flexGrow: 1
  },
  appBar: {
    backgroundColor: 'white'
  },
  title: {
    fontFamily: 'DM Serif Display',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#009245',
    flexGrow: 1
  },
  links: {
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function ButtonAppBar () {
  const classes = useStyles();

  function displayLoginOrLogoutLink() {
    let isLoggedIn = true; // DEBUG_ONLY
    let linkToReturn;
    if (isLoggedIn) {
      linkToReturn = <Link component={Link} to='/logout'>logout</Link>;
    } else {
      linkToReturn = <Link component={Link} to='/login'>login</Link>
    }
    return linkToReturn;
  }

  function displayProfileButton () {
    let isLoggedIn = true; // DEBUG_ONLY
    let linkToReturn;
    if (isLoggedIn) {
      linkToReturn = <Link component={Link} to='/profile'>profile</Link>;
    }
    return linkToReturn;
  }

  return (
    <div className={classes.root}>
      {/* <Paper elevation='0' > */}
        <AppBar className={classes.appBar} position='static' elevation='0' width='60'>
          <Toolbar>
            <Typography className={classes.title}>
              avotecado
            </Typography>
            <span classNAme={classes.links}>
              <Link component={Link} to='/'>home</Link>
              {' '} <Link component={Link} to='/politicians'>politicians</Link>
              {' '} <Link component={Link} to='/parties'>parties</Link>
              {' '} <Link component={Link} to='/votes'>votes</Link>
              {' '} { displayLoginOrLogoutLink() }
              {' '} { displayProfileButton() }
              </span>
          </Toolbar>
        </AppBar>
      {/* </Paper> */}
    </div>
  );
}
