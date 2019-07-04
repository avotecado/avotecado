import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Home extends Component {
  render () {
    return (
      <div>
        <CssBaseline />
        <Container maxWidth='md' >
          <Typography component='div' style={{ backgroundColor: '#cfe8fc' }}>
            Welcome to avotecado.
              We provide an easy to access method for everyday people with busy lives to get quickly informed about local politics.
              Our current offerings are for Vancouver.

            Why?
              Understanding politics at every level is important. There is a high ddegree of apathy in the local when compared to provincial and federal level participation.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default Home;
