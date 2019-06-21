import React, { Component } from 'react';
import PolBar from './PolBar'
import BioPage from './BioPage'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Card() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
          {/* <div className="card"> */}
          <PolBar />
          {/* <PolBar key={index} firstname={politician.firstname} lastname={politician.lastname} party={politician.party} /> */}
          <BioPage />
          {/* </div> */}
        </Typography>

      </Container>
    </React.Fragment>
  );
}

// class Card extends Component {
//   render() {
//     return (
//       <div className="card">
//         <PolBar />
//         <BioPage />
//       </div>
//     );
//   }
// }

export default Card;
