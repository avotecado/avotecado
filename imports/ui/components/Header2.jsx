import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { makeStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

export class Header2 extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      login: Meteor.userId() 
    };
    console.log(this);
  }

  render() {
    console.log(this.state);
    const classes = {
      root: {
        marginTop: '-1em',
        marginBottom: '6em',
        height: '2em',
        flexGrow: 1
      },
      appBar: {
        backgroundColor: 'white'
      },
      title: {
        fontFamily: 'Helvetica Black Extended',
        fontWeight: 'bold',
        flexGrow: 1
      },
      links: {
        fontFamily: 'Helvetica Black Extended',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black'
      }
    };

    let linkNotActiveStyle = {
      fontFamily: 'Fact-Expanded',
      fontSize: '1.15em',
      color: 'black',
      textDecorationLine: 'none',
      marginLeft: '2vw',
      marginRight: '2vw'
    };
    let linkActiveStyle = {
      fontFamily: 'Helvetica Black Extended',
      fontSize: '1.15em',
      color: '#009245',
      textDecorationLine: 'none',
      borderBottom: '4px solid #009245',
      paddingBottom: '0.75em',
      marginLeft: '2vw',
      marginRight: '2vw'
    };

    return (
      <div className={classes.root}>
        <Container maxWidth='lg' >
          <Toolbar disableGutters >

            <Typography className={classes.title}>
              <NavLink to='/' activeStyle={{ fontSize: '3em', fontWeight: 'bold', backgroundColor: 'rgb(0, 146, 69)', color: 'white', textDecorationLine: 'none' }}>avotecado</NavLink>
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
    )
  }
}

const mapMeteorToProps = (props) => {
  return {
    userId: Meteor.userId()
  };
};

export default withTracker ( mapMeteorToProps )(Header2);