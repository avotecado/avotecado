import React, { Component } from 'react';
import { Mongo } from 'meteor/mongo';
import Politicians from '/imports/api/politicians';
import { withTracker } from 'meteor/react-meteor-data';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

let ok = '';

class Hello extends Component {
  state = {
    counter: 0,
  }

  componentDidMount () {
    ok = this.props.Politicians;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    console.log('this.props.Politicians: ', (ok ? ok.find().fetch() : null));
    return (
      <div>
        <Card>
          <CardContent>
            <button onClick={() => this.increment()}>Click Me</button>
            <p>You've pressed the button {this.state.counter} times.</p>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withTracker(() => { return { Politicians: Politicians }; })(Hello);
