import React, { Component } from 'react';

class BioPage extends Component {
  render () {
    return (
      <div className='bioPage'>
        <div id='bioNav' >
          <span id='BIO'>BIOGRAPHY</span> <span id='VOTING_RECORD'>VOTING RECORD</span>
        </div>
        <div id='InfoText'>
          <span>Current Party: </span>
          <span className='party'>Independent</span>
          <p><span>Years with Party: 1 </span></p>
          <p><span>Total Years Active: 1</span></p>
          <p><span>Phone Number: </span><br />
            <span className='party'>Unavailable.</span></p>
          <br />
          <span>Address:</span><br />
          <span className='party'>
            Kennedy Stewart, Mayor <br />
            3rd Floor, <br />
            City Hall <br />
            453 West 12th Ave <br />
            Vancouver, BC V5Y 1V4
          </span>
        </div>
      </div>
    );
  }
}

export default BioPage;
