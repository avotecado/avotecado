import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class PartiesSelect extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politiciansArray: []
    };
  }

  componentDidMount () {
    // console.log('polSelect cdm: ', this.props.politiciansArray);
    this.setState({ politiciansArray: this.props.politiciansArray });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.politiciansArray !== this.props.politiciansArray) {
      // console.log('polSelect cdu: ', this.props.politiciansArray);
      this.setState({ politiciansArray: this.props.politiciansArray });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ politiciansArray: nextProps.politiciansArray });
  }

  render () {
    let buttonTextStyle = { fontFamily: 'Helvetica Black Extended', fontWeight: 'bold', fontSize: '1.15em', color: 'black', textTransform: 'none' };
    return (
      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
        {this.state.politiciansArray.map((politician, index) => (
          <NavLink to={'/politicians?' + politician._id} key={index} style={{ textDecorationLine: 'none' }}>
            <Button style={buttonTextStyle}>
              {politician.firstname} {politician.lastname}
            </Button>
          </NavLink>
        ))}
      </div>
    );
  }
}