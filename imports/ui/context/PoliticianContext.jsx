import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

const PoliticianContext = React.createContext();

class PoliticianContextProvider extends Component {
  state = {
    politicians: this.props.politicians
  }

  render () {
    return (
      <PoliticianContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </PoliticianContext.Provider>
    );
  }
}

export default InfoContainer = withTracker(() => {
  Meteor.subscribe('Politicians', {
    onReady: function () { console.log('content infoContainer: ', Politicians.find().fetch()); },
    onError: function () { console.log('onError'); }
  });
  return {
    politicians: Politicians.find().fetch()
  };
})(PoliticianContextProvider);