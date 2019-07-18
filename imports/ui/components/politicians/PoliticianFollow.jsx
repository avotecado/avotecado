import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Button from '@material-ui/core/Button';

export class PoliticianFollow extends Component {
  constructor (props) {
    super(props);
    this.state = {
      followedArray: [],
      politician: '',
      loaded: false
    };
  }

  componentDidMount () {
    // console.log(this.props.politician);
    // console.log(this.props.followedArray);
    if (this.props.followedArray) {
      this.setState({ followedArray: this.props.followedArray, loaded: true });
    }
  }

  componentDidUpdate (prevProps, prevState) {
  }

  render () {
    if (this.state.loaded) {
      // console.log('this.props.followedCollection: ', this.props.followedCollection);
      let politician = this.props.politician;
      // let userID = this.props.userID;
      // console.log('userID: ', userID.toString());

      let followedArray = this.props.followedArray.flatMap(x => (x.following));
      // console.log('Followed:', this.props.followedArray);
      // console.log('FollowedVar: ', followedArray);
      // console.log((Followed.findOne(userID).following.includes(politician._id)));
      let alreadyFollows = (followedArray.includes(politician._id));
      // console.log('alreadyFollows?:', alreadyFollows);
      if (alreadyFollows) {
        return (
          <div>
            <Button variant='contained' onClick={() => Meteor.call('followed.remove', politician._id)}>
              Unfollow
            </Button>
          </div>
        );
      } else {
        return (
          <div>
            <Button variant='contained' onClick={() => Meteor.call('followed.add', politician._id)}>
              Follow
            </Button>
          </div>
        );
      }
    } else {
      return (
        <div>
          Loading...
        </div>
      );
    }
  }
}

export default PoliticianFollow;
