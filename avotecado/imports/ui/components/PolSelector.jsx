import React, { Component } from 'react';
import PolBar from './PolBar';
import { connect } from 'react-redux';

class PolList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div id='polSelector'>
        {this.props.politicians.map((politician, index) => (
          <PolBar key={index} firstname={politician.firstname} lastname={politician.lastname} party={politician.party} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { politicians: state.politicians };
};
export default connect(mapStateToProps)(PolList);
