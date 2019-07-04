import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import Politicians from '/imports/api/politicians';

export default class Hello extends Component {
  state = {
    counter: 0,
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
    let ok = Politicians.find();
    console.log(ok);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.increment()}>Click Me</button>
        <p>You've pressed the button {this.state.counter} times.</p>
      </div>
    );
  }
}
