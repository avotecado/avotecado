import React from 'react';

import ChartPartyMakeUp from '../components/home/ChartPartyMakeUp';
import HomeSpotlight from '../components/home/HomeSpotlight';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const subHeaderStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '2.0em',
    color: 'black',
    textAlign: 'center',
};

export default function Home() {
    return (
        <>
            <Container display='flex' maxWidth='lg'>
                <div style={{marginBottom: '2.5em'}}>
                    <span style={subHeaderStyle}> At a Glance </span>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <ChartPartyMakeUp/>
                        </Grid>
                    </Grid>
                </div>
                <span style={subHeaderStyle}> Spotlight Politician </span>
                <Grid container spacing={3}>
                    <HomeSpotlight/>
                </Grid>
            </Container>
        </>
    );
}
