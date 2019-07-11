import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PoliticiansSelect extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: []
    };
  }

  componentDidMount () {
    console.log('polSelect cdm: ', this.props.politiciansArray);
    this.setState({ politiciansArray: this.props.politiciansArray });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.politiciansArray !== this.props.politiciansArray) {
      console.log('polSelect cdu: ', this.props.politiciansArray);
      this.setState({ politiciansArray: this.props.politiciansArray });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ politiciansArray: nextProps.politiciansArray });
  }

  render () {
    return (
      <div>
        {this.state.politiciansArray.map((politician, index) => (
          <Link to={'/Politicians' + index} key={index}>
            {politician.firstname} {politician.lastname}
          </Link>
        ))}
      </div>
    );
  }
}
