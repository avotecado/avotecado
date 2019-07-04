import React, { Component } from 'react';
import { connect } from 'react-redux';
import PolBar from './PolBar';
import BioPage from './BioPage';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Card (props) {
  console.log('Selected passed to card: ', props.selectedPolitician);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg' >
        <Typography component='div' style={{ backgroundColor: '#cfe8fc' }}>
          {/* <div className="card"> */}
          <PolBar />
          {/* <PolBar firstname={props.selectedPolitician.firstname} lastname={props.selectedPolitician.lastname} party={props.selectedPolitician.party} /> */}
          <BioPage />
          {/* </div> */}
        </Typography>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    politicians: state.politicianListReducer,
    selectedPolitician: state.selectPoliticianReducer
  };
};

export default connect(mapStateToProps)(Card);
