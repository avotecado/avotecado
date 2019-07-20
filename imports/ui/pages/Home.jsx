import React from 'react';

import HomeSpotlight from '../components/HomeSpotlight';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2)
//   },
//   gridClass: {
//     marginTop: '5vw'
//   },
//   card: {
//     marginLeft: '1em',
//     marginRight: '1em',
//     backgroundColor: '#f2f2f2',
//     textAlign: 'center',
//     minWidth: 275
//   },
//   cardText: {
//     fontFamily: 'Fact-Expanded',
//     fontWeight: '600'
//   },
//   title: {
//     textAlign: 'center'
//   }
// }));

export default function Home () {
  // const classes = useStyles();
  let subHeaderStyle = { fontFamily: 'Fact-ExpandedBlack', fontSize: '2.0em', color: 'white', textAlign: 'center', backgroundColor: 'black' };

  return (
    <>
      <Container display='flex' maxWidth='lg'>
        <span style={subHeaderStyle}> Spotlight Politician </span>
        <Grid container spacing={3}>
          <HomeSpotlight />
        </Grid>
      </Container>
    </>
  );
}
