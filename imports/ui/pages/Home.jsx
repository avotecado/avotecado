import React from 'react';

import ChartPartyMakeUp from '../components/home/ChartPartyMakeUp';
import HomeSpotlight from '../components/home/HomeSpotlight';

import HomeMainCard from '../components/home/HomeMainCard';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import {sizing, minHeight, height} from '@material-ui/system';
import {TwitterTimelineEmbed} from 'react-twitter-embed';


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
                    <Grid container>
                        <Grid item xs={12}>
                            <HomeMainCard/>
                        </Grid>
                    </Grid>
                </div>
            </Container>


            <Container display='flex' maxWidth='lg'>
                <span style={subHeaderStyle}> Spotlight Politician </span>
                <Grid container spacing={3}>
                    <HomeSpotlight/>
                </Grid>
                <Paper>
                    <Grid container spacing={3} style={{padding: '1em', display: 'flex', alignItems:'center'}}>
                        <Grid item xs={6}>
                            <span style={subHeaderStyle}> At a Glance </span>
                            <div style={{fontFamily: 'Fact-ExpandedMedium'}}>
                                <span>Percentage of council seats held by parties</span>
                            </div>
                            <ChartPartyMakeUp/>
                            <div style={{fontFamily: 'Fact-ExpandedMedium'}}>
                                <span>2018-2022 Vancouver City Council</span>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper style={{position: 'relative'}}>
                                <TwitterTimelineEmbed
                                    sourceType="list"
                                    ownerScreenName="avotecado"
                                    slug="avotecado-vancouver1"
                                    options={{height: 800}}
                                    theme="light"
                                />
                            </Paper>
                        </Grid>

                    </Grid>
                </Paper>

            </Container>
        </>
    );
}
