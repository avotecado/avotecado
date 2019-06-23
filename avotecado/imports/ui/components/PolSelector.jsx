import React, { Component } from 'react';
import PolBar from './PolBar';
import { connect } from 'react-redux';
import { selectPolitician } from '../actions'

class PolList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.selectPolitician = this.selectPolitician.bind(this);
  // }

  // selectPolitician = (politician) => {
  //   this.setState({
  //     selectedPolitician: politician
  //   });
  //   console.log("Selected from list: ", politician);
  // }

  render() {
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
  return {
    politicians: state.politicianListReducer,
    selectedPolitician: state.selectedPoliticianReducer
  }
};

const mapDispatchToProps = (dispatch) => ({
  selectPolitician: (politician) => dispatch(Actions.selectPolitician(politician))
});

export default connect(mapStateToProps, mapDispatchToProps)(PolList);