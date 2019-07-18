import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class PoliticianViewComments extends Component {
  constructor (props) {
    super(props);
    this.state = {
      commentsArray: []
    };
  }

  componentDidMount () {
    this.setState({ commentsArray: this.props.commentsArray });
    // console.log(this.state.commentsArray);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.commentsArray !== this.state.commentsArray) {
      // console.log('polContact cdu: ', this.props.commentsArray);
      this.setState({ commentsArray: this.state.commentsArray });
      // console.log(this.state);
    }
  }

  static getDerivedStateFromProps (props, state) {
    if (props.commentsArray !== state.commentsArray) {
      return {
        commentsArray: props.commentsArray
      };
    }
    return null;
  }

  render () {
    console.log(this.state);
    return (
      <>
        <Container>
          <List style={{ maxHeight: '100%', overflowY: 'auto' }}>
            <div>
              {this.state.commentsArray.map((message, index) => (
                <ListItem key={index}>
                  {message.username}: {message.message}
                </ListItem>
              ))}
            </div>
          </List>
        </Container>
      </>
    );
  }
}

export default PoliticianViewComments;
