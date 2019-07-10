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
      <div>
        <Container display='flex' maxWidth="xl">
          {/* <button onClick={() => this.increment()}>Click Me</button>
          You've pressed the button {this.state.counter} times. */}
          about / <a href='https://github.com/avotecado/avotecado'>contact</a>
          <Typography style={{ fontFamily: 'DM Serif Display', fontWeight: 'bold', fontSize: '2rem', }}>
            avotecado
          </Typography>
        </Container>
      </div>
    );
  }
}
