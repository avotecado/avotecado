import React, { Component } from 'react';
import PolBar from './PolBar';
import { connect } from 'react-redux';
import { selectPolitician } from '../actions';
import { Link } from 'react-router-dom';

class PolList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: this.props.politiicans,
      selectedPolitician: this.props.selectedPolitician
    };
    this.doAlert = this.doAlert.bind(this);
  }

  doAlert () {
    alert('e');
  }

  render () {
    console.log('\n');
    // console.log('this.props.politicians: ', this.props.politicians);
    console.log('this.props.selectedPolitician: ', this.props.selectedPolitician);
    console.log('\n');
    // console.log('politicians: ', this.state.politicians);
    return (
      <div id='polSelector'>
        {this.props.politicians.map((politician, index) => (

          <Link to={'/Content'} key={index} onClick={() => this.props.selectPolitician(politician)}>
            <PolBar key={index} firstname={politician.firstname} lastname={politician.lastname} party={politician.party} />

          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('\n');
  console.log('state: ', state);
  console.log('\n');
  return {
    politicians: state.politicians[0],
    selectedPolitician: state.selectedPoliticianReducer
  };
};

export default connect(mapStateToProps, { selectPolitician })(PolList);
