import React from 'react';

import ChartPartyMakeUp from '../components/home/ChartPartyMakeUp';
import HomeSpotlight from '../components/home/HomeSpotlight';

import HomeMainCard from '../components/home/HomeMainCard';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { sizing, minHeight, height } from '@material-ui/system';




export default function Home() {
    // const classes = useStyles();
    let subHeaderStyle = {
        fontFamily: 'Helvetica Black Extended',
        fontSize: '2.0em',
        color: 'black',
        textAlign: 'center',
    };

    // return (
    //     <>
    //         <Container display='flex' maxWidth='lg'>
    //             <div style={{marginBottom: '2.5em'}}>
    //                 <span style={subHeaderStyle}> At a Glance </span>
    //                 <Grid container spacing={3}>
    //                     <Grid item xs={6}>
    //                         <ChartPartyMakeUp/>
    //                 </Grid>
    //                 </Grid>
    //             </div>
    //             <span style={subHeaderStyle}> Spotlight Politician </span>
    //             <Grid container spacing={3}>
    //                 <HomeSpotlight/>
    //             </Grid>
    //         </Container>
    //     </>
    // );

    return (
        <>
            <Container display ='flex' maxWidth='lg' >
                {/* div style, as per Artsy: backgroundimage will be called here */}
                <div style={{marginBottom: '2.5em'}}>
                    <Grid container>
                        <Grid item xs={12}>
                            <HomeMainCard/>
                        </Grid>
                    </Grid>
                </div>   
            </Container>

        </>
    );

}
