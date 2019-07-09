import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static' elevation='0'>
        <Toolbar>
          <Typography className={classes.title}>
            avotecado
          </Typography>
          <span classNAme={classes.links}>
            <Link component={Link} to='/'>home</Link>
            {' '} <Link component={Link} to='/politicians'>politicians</Link>
            {' '} <Link component={Link} to='/parties'>parties</Link>
            {' '} <Link component={Link} to='/votes'>votes</Link>
            {' '} <Link component={Link} to='/login'>login</Link>
          </span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
