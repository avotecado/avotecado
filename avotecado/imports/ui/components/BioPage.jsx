import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer (props) {
  return (
    <Typography component='div' style={{ padding: 24 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  color: {
    color: 'black'
  }
}));

export default function PoliTabs () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange (event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          style={{ background: 'black' }}
          value={value} onChange={handleChange} variant='fullWidth'
          TabIndicatorProps={{ style: { backgroundColor: '#009245', height: '0.5em' } }}>
          <Tab label='Biography' />
          <Tab label='Voting Record' />
        </Tabs>
      </AppBar>

      {value === 0 && <TabContainer>
        <div id='InfoText'>
          <span><strong>Current Party:</strong> </span>
          <span className='party'>Independent</span>

          <p><span><strong>Years with Party:</strong> 1 </span></p>

          <p><span><strong>Total Years Active:</strong> 1</span></p>

          <p><span><strong>Phone Number:</strong> </span><br />
            <span className='party'>Unavailable.</span></p>
          <br />
          <span><strong>Address:</strong></span><br />
          <span className='party'>
            Kennedy Stewart, Mayor <br />
            3rd Floor, <br />
            City Hall <br />
            453 West 12th Ave <br />
            Vancouver, BC V5Y 1V4
          </span>
        </div>

      </TabContainer>}

      {value === 1 && <TabContainer>
        Most Recent Voting Record to be displayed here

      </TabContainer>}
    </div>
  );
}
