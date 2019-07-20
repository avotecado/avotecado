import React from 'react';
import { Container } from '@material-ui/core';

export default function PoliticianHeaderText () {
  return (
    <div>
      <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'Fact-ExpandedBlack', fontSize: '4em', fontColor: 'rgba(0,0,0,0)', textAlign: 'center', marginBottom: '-0.5em' }}>
          Vancouver's
        </span>
        <span style={{ fontFamily: 'Fact-ExpandedBlack', fontSize: '4em', WebkitTextFillColor: 'rgba(255,255,255,0.001)', WebkitTextStrokeWidth: '2.5px', WebkitTextStrokeColor: 'rgb(0, 146, 69)' }}>
          Councillors
        </span>
        <span style={{ color: 'white', backgroundColor: 'black' }}>Take a look at your Vancouver City Council members, see how they vote, and maybe leave a comment.</span>
      </Container>
    </div>
  );
}
