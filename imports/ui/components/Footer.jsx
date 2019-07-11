import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export default class Footer extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <>
        <Container display='flex' maxWidth='lg' component='div' style={{ backgroundColor: '#f2f2f2', marginTop:'3em' , paddingTop: '3em'}}>
          about / <a href='https://github.com/avotecado/avotecado'>contact</a>
          <Typography component='div' style={{ fontFamily: 'DM Serif Display', fontWeight: 'bold', fontSize: '2rem', }}>
            avotecado
          </Typography>
        </Container>
      </>
    );
  }
}
