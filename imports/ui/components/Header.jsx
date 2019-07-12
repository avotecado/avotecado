import React from 'react';
import { Meteor } from 'meteor/meteor';

import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

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
    fontSize: '4em',
    color: '#009245',
    flexGrow: 1
  },
  links: {
    fontFamily: 'DM Serif Display',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black'
  }
}));

export default function ButtonAppBar () {
  const classes = useStyles();

  function displayLoginOrLogoutLink () {
    let isLoggedIn = true; // DEBUG_ONLY
    let linkToReturn;
    if (isLoggedIn) {
      linkToReturn = <NavLink to='/logout'
        style={{ color: 'black', textDecorationLine: 'none' }}
        activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'underline' }}>
        logout
      </NavLink>;
    } else {
      linkToReturn = <NavLink to='/login'
        style={{ color: 'black', textDecorationLine: 'none' }}
        activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'underline' }}>
        login
      </NavLink>;
    }
    return linkToReturn;
  }

  function displayProfileButton () {
    let isLoggedIn = true; // DEBUG_ONLY
    let linkToReturn;
    if (isLoggedIn) {
      linkToReturn = <NavLink to='/profile'
        style={{ color: 'black', textDecorationLine: 'none' }}
        activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'underline' }}>
        profile
      </NavLink>;
    }
    return linkToReturn;
  }

  let linkNotActiveStyle = {
    fontSize: '1.15em',
    color: 'black',
    textDecorationLine: 'none',
    marginLeft: '2vw',
    marginRight: '2vw'
  };
  let linkActiveStyle = {
    fontSize: '1.15em',
    fontWeight: 'bold',
    color: '#009245',
    textDecorationLine: 'none',
    borderBottom: '4px solid #009245',
    paddingBottom: '0.75em',
    marginLeft: '2vw',
    marginRight: '2vw'
  };

  return (
    <div className={classes.root}>
      <Container maxWidth='xl' >
        <Toolbar disableGutters >

          <Typography className={classes.title}>
            <NavLink to='/' activeStyle={{ fontSize: '1.15em', fontWeight: 'bold', color: '#009245', textDecorationLine: 'none' }}>avotecado</NavLink>
          </Typography>

          <span className={classes.links}>

            <NavLink to='/politicians'
              style={linkNotActiveStyle}
              activeStyle={linkActiveStyle}
            >
                politicians
            </NavLink>

            <NavLink to='/parties'
              style={linkNotActiveStyle}
              activeStyle={linkActiveStyle}
            >
                parties
            </NavLink>

            <NavLink to='/votes'
              style={linkNotActiveStyle}
              activeStyle={linkActiveStyle}
            >
                votes
            </NavLink>

            {
              (Meteor.userId()) ? (
                <Link to='/profile' >
                  <IconButton
                    aria-label='Account of current user' aria-controls='primary-search-account-menu'
                    aria-haspopup='true' color='inherit' style={{ color: '#009245' }}
                  >
                    <AccountCircle style={{ fontSize: '2em' }} />
                  </IconButton>
                </Link>
              ) : (
                <Link to='/login' >
                  <IconButton
                    aria-label='Account of current user' aria-controls='primary-search-account-menu'
                    aria-haspopup='true' color='inherit' style={{ color: 'black' }}
                  >
                    <AccountCircle style={{ fontSize: '2em' }} />
                  </IconButton>
                </Link>
              )
            }
          </span>
        </Toolbar>
      </Container>
    </div>
  );
}
