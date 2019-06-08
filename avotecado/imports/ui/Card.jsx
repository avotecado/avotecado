import React, { Component } from 'react';
import PolBar from './PolBar'
import BioPage from './BioPage'

class Card extends Component {
  render() {
    return (
      <div className="card">
        <PolBar />
        <BioPage />
      </div>
    );
  }
}

export default Card;
