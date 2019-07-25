import React from 'react';
import { NavLink } from 'react-router-dom';

import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Container from '@material-ui/core/Container';

class UserDirectory extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      usersList: []
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({
        loading: false,
        usersList: this.props.users
      });
    }
    if (prevState !== this.state) {
      console.log(this.state);
    }
  }

  render () {
    if (!this.state.loading) {
      let usersList = this.state.usersList;
      return (
        <div>
          <Container>
            User directory: <br />
            {usersList.map((userEntry, index) => {
              return (
                <ul>
                  <li><NavLink key={index} to='/'>{userEntry.username}</NavLink></li>
                  <br />
                </ul>
              );
            })}
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('UsersList', {
    onReady: function () {},
    onError: function () {}
  });
  return { users: Meteor.users.find({}).fetch() };
})(UserDirectory);
