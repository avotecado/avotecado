import React, { Component } from 'react';
import { connect } from 'react-redux';
import PolBarContent from './PolBarContent';
import BioPage from '../pages/BioPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class Card extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log('Selected passed to card: ', this.props.selectedPolitician);
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg' >
          <Typography component='div' style={{ backgroundColor: '#cfe8fc' }}>
            {/* <div className="card"> */}
            <PolBarContent selectedPolitician={this.props.selectedPolitician} />
            {/* <PolBar firstname={props.selectedPolitician.firstname} lastname={props.selectedPolitician.lastname} party={props.selectedPolitician.party} /> */}
            <BioPage selectedPolitician={this.props.selectedPolitician} />
            {/* </div> */}
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
