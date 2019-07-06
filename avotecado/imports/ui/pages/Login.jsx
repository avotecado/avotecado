import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import AccountsUIWrapper from '../components/accountsUiWrapper';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import LoginComponent from '../components/LoginComponent';
import '../../startup/accounts-config';
import { Accounts } from 'meteor/accounts-base';

const styles = theme => ({
  root: {
    margin: '10em',
    padding: '4em'
  }
});

class Login extends React.Component {
  render () {
    // const classes = useStyles();
    return (
      <div>
        <Container>
          <Container component='div' style={{ backgroundColor: 'white', height: '60vh' }} >
            <h1>Login</h1>
            <AccountsUIWrapper />
            <LoginComponent />
            <p />
          </Container>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
