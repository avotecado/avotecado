import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import Politicians from '../api/Politicians';
import { Meteor } from 'meteor/meteor';

class Info extends Component {  
  render () {
    console.log(this.props.Politicians);
    const Politicians = this.props.Politicians.map(
      link => this.makeLink(link)
    );

    return (
      <div>
        <h2>Learn Meteor!</h2>
        <ul>{ Politicians }</ul>
      </div>
    );
  }

  makeLink (politician) {
    return (
      <li key={politician._id}>
        <a href={politician.profileURL} target='_blank'>{politician.firstname} {politician.lastname}</a>
      </li>
    );
  }
}

export default InfoContainer = withTracker(() => {
  return {
    Politicians: Politicians.find().fetch()
  };
})(Info);

// export default InfoContainer = withTracker(() => {
//   Meteor.subscribe('Politicians', {
//     onReady: function () { console.log(Politicians.find().fetch())},
//     onError: function () { console.log('onError'); }
//   });
//   return {
//     Politicians: Politicians.find().fetch()
//   };
// })(Info);
