import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Biography" />

          <Tab label="Voting Record" />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>

        <div id='InfoText'>
          <span>Current Party: </span>
          <span className='party'>Independent</span>
          <p><span>Years with Party: 1 </span></p>
          <p><span>Total Years Active: 1</span></p>
          <p><span>Phone Number: </span><br />
            <span className='party'>Unavailable.</span></p>
          <br />
          <span>Address:</span><br />
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

// class BioPage extends Component {
//   render () {
//     return (
//       <div className='bioPage'>
//         <div id='bioNav' >
//           <span id='BIO'>BIOGRAPHY</span> <span id='VOTING_RECORD'>VOTING RECORD</span>
//         </div>
//         <div id='InfoText'>
//           <span>Current Party: </span>
//           <span className='party'>Independent</span>
//           <p><span>Years with Party: 1 </span></p>
//           <p><span>Total Years Active: 1</span></p>
//           <p><span>Phone Number: </span><br />
//             <span className='party'>Unavailable.</span></p>
//           <br />
//           <span>Address:</span><br />
//           <span className='party'>
//             Kennedy Stewart, Mayor <br />
//             3rd Floor, <br />
//             City Hall <br />
//             453 West 12th Ave <br />
//             Vancouver, BC V5Y 1V4
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default BioPage;
