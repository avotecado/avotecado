import React, { Component } from 'react';
import Card from '../components/Card';

class Content extends Component {
  render () {
    console.log('content.jsx, this.props:', this.props);
    return (
      <div className='content'>
        <Card />
      </div>
    );
  }
}

export default Content;
