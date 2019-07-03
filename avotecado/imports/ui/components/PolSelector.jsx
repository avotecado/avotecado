import React, { Component } from 'react';
import PolBar from './PolBar';
import { connect } from 'react-redux';
import { selectPolitician } from '../actions';

class PolList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: this.props.politiicans
    };
    // this.selectPolitician = this.selectPolitician.bind(this);
  }

  // selectPolitician = (politician) => {
  //   this.setState({
  //     selectedPolitician: politician
  //   });
  //   console.log("Selected from list: ", politician);
  // }

  render () {
    console.log('this.props.politicians: ', this.props.politicians);
    // console.log('politicians: ', this.state.politicians);
    return (
      <div id='polSelector'>
        {this.props.politicians.map((politician, index) => (
          <span key={index} onClick={() => selectPolitician(politician)}>
            <PolBar key={index} firstname={politician.firstname} lastname={politician.lastname} party={politician.party} />
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  console.log('state.politicians[0]: ', state.politicians[0]);
  return {
    politicians: state.politicians[0],
    selectedPolitician: state.selectedPoliticianReducer
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   selectPolitician: (politician) => dispatch(Actions.selectPolitician(politician))
// });

export default connect(mapStateToProps, { selectPolitician })(PolList);
