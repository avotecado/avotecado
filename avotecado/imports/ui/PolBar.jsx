import React, { Component } from 'react';

class PolBar extends Component {
  render () {
    return (
      <div id='polBar'>
        <span className='pfp'>
          <img src='photos/mayor_kennedy_stewart_200px_A2_Rectangle_21_pattern@2x.png' width='64' />
        </span>
        <div id='polText'>
          <span className='name'>Kennedy Stewart<br /></span>
          <span className='party'>Independent</span>
        </div>
        <span className='ic_menu_48px_A2_Path_23'>
          <img src='icons/ic_menu_48px.png' width='64' />
        </span>

      </div>
    );
  }
}

export default PolBar;
