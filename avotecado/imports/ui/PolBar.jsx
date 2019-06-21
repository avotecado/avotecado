import React, { Component } from 'react';
import { connect } from 'react-redux';

const photoName = (firstname, lastname) => {
  let output = 'photos/' + firstname + '_' + lastname + '_40.png';
  return output.replace(' ', '_');
}

class PolBar extends Component {
  render () {
    return (
      <div id={this.props.key} className='polBar'>
        <span className='pfp'>
          <img src={photoName(this.props.firstname, this.props.lastname)} width='40' />
        </span>
        <div className='polText'>
          <span className='name'>{this.props.firstname} {this.props.lastname}</span><br />
          <span className='party'>{this.props.party}</span>
        </div>
        <span className='ic_menu_48px_A2_Path_23'>
          <img src='icons/ic_menu_48px.png' width='48' />
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return { politician: state.politician}
}
export default connect(mapStateToProps)(PolBar);