import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    backgroundColor: 'white'
  },
  color: {
    color: 'white'
  }
}));

export default function PoliTabs (props) {
  let politician = props.selectedPolitician;
  console.log(politician);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange (event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value} onChange={handleChange} variant='fullWidth'
        >
          <Tab label='Biography' />
          <Tab label='Voting Record' />
        </Tabs>
      </AppBar>

      {value === 0 && <TabContainer>
        <div id='InfoText'>
          <span><strong>Current Party:</strong> {politician.party} </span>
          <p><span><strong>COV Profile:</strong> {politician.profileURL} </span><br /></p>
          <p><span><strong>Phone Number:</strong> {politician.phone} </span><br /></p>
          <p><span><strong>Mobile Number:</strong> {politician.mobile} </span><br /></p>
          <span><strong>Email:</strong> {politician.email} </span><br />
          <span><strong>Address:</strong> {politician.address} </span><br />
        </div>

      </TabContainer>}

      {value === 1 && <TabContainer>
        Most Recent Voting Record to be displayed here

      </TabContainer>}
    </div>
  );
}
