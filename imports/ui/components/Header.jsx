import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import BalanceIcon from 'material-ui/svg-icons/action/account-balance';

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

  return (
    <div className={classes.root}>
      <Container display='flex' maxWidth='xl'>
        <Toolbar disableGutters >

          <Typography className={classes.title}>
            <NavLink to='/' activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'none' }}>avotecado</NavLink>
          </Typography>

          <span className={classes.links} wordSpacing='4em'>

            <NavLink to='/Politicians'
              style={{ color: 'black', textDecorationLine: 'none', marginLeft: '2em', marginRight: '2em' }}
              activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'none', borderBottom: '4px solid #009245', paddingBottom: '0.75em', marginLeft: '2em', marginRight: '2em' }}>
                politicians
            </NavLink>

            { ' ' }

            <NavLink to='/parties'
              style={{ color: 'black', textDecorationLine: 'none', marginLeft: '2em', marginRight: '2em' }}
              activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'none', borderBottom: '4px solid #009245', paddingBottom: '0.75em', marginLeft: '2em', marginRight: '2em' }}>
                parties
            </NavLink>

            { ' ' }

            <NavLink to='/votes'
              style={{ color: 'black', textDecorationLine: 'none', marginLeft: '2em', marginRight: '2em' }}
              activeStyle={{ fontWeight: 'bold', color: '#009245', textDecorationLine: 'none', borderBottom: '4px solid #009245', paddingBottom: '0.75em', marginLeft: '2em', marginRight: '2em' }}>
                votes
            </NavLink>

            { ' ' }

            {displayProfileButton()}
            { ' ' }

            {displayLoginOrLogoutLink()}

            {/* <BalanceIcon /> */}

          </span>
        </Toolbar>
      </Container>
    </div>
  );
}
