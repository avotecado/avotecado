import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions';
import Button from '@material-ui/core/Button';

class Logout extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();

    this.clearInputs();
    this.props.logOut();
  }

  render () {
    return (
      <div>
        <h6>logout</h6>
        <form className='textInputArea' onSubmit={this.handleSubmit}>
          <Button color='secondary' type='submit'>logout</Button> <p />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    //
  };
};

export default connect(mapState, { logOut })(Logout);
