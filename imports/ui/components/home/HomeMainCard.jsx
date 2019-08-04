import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import vanImage from '../../../../client/images/vancouverSpecialsKevinLanthier.jpg';
console.log(vanImage);

import './home-style.css';

const useStyles = makeStyles(theme => ({

    homeHeroUnit: {
        position: 'relative',
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${vanImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        /* more to add re: positioning */
        // transition: opacity fade-duration ease-out;
        opacity: 0.75,
    },

    // added from : (https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Blog.js)

    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },

    hhuFrame: {
        position: 'relative',
        textDecoration: 'none',
    },
    
    hhuHeader: {
        fontSize: '40px',
        lineHeight: 1,
    },
    
    hhuTitle: {
        display: 'inline-block',
        fontSize: '20px',
    },
    
    hhuSubheading: {
        fontSize: '40px'
    },
    
    hhuActionPrompt:{
        fontSize: '18px',
    },
    
    hhuButton: {
        padding: '10px 20px',
        border: '3px solid black',
        background: 'transparent',
        backgroundColor: 'black',
        color: 'white',
    },

    //TODO: revisit and apply :(https://github.com/mui-org/material-ui/issues/10075)
    // hhuButton:hover,
    // hhuButton:active,
    // hhuButton:focus{
    //     color: black;
    //     background: white;
    // }
    
    homeHeroUnitControls:{
        textAlign: 'center',
    },
    
    homeHeroUnitDots: {
        width: '8px',
        height: '8px',
        borderRadius: '8px',
        display: 'inline-block',
    },
    
    //TODO: (see: (https://material-ui.com/guides/interoperability/))
    //      you can still import regular CSS as per link above - test and see
    // homeHeroUnitDots li: {
    //     background-color: gray;
    //     display: inline-block;
    //     cursor: pointer;
    //     transition: background-color 0.3s;
    //     }
    
    // .home-hero-unit-dots .hhud-active,
    // .home-hero-unit-dots li:hover,
    // .home-hero-unit-dots li:focus,
    // .home-hero-unit-dots li:active {
    //     background: #000;
    // }
    
    // .home-hero-unit-dots li:last-child {
    //     margin-right: 0;
    // }
    
}))

export default function HomeMainCard () {
    const classes = useStyles();
    // constructor(props) {
    //     super.props(props);
    //     this.state = {
    //         politician: null,
    //         PagePromptImage: null,
    //         PagePromptText: null
    //     };
    // }

        return(

            <Paper className={classes.homeHeroUnit}>
            
            {
                <img 
                    style={{ display: 'none' }}
                    src='photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'
                    alt='background'
                />
            }

            {/* <div className={classes.overlay} /> */}
                {/* <Grid container spacing={3}> */}
                <Grid container maxWidth="sm" >
                <div >
                        <Grid item xs={12}>
                            {/* <div className="home-hero-unit">
                                <img src='photos/homeHeroImages/VancouverSpecialsKevinLanthier.jpg'/>
                            </div> */}
                            {/* this may be container for CardContent */}
                                {/* <div className="home-hero-unit"></div> */}
                                <Typography className={classes.hhuHeader}>Avotecado</Typography>
                                <Typography className={classes.hhuTitle}>TITLE: </Typography>
                                <Typography className={classes.hhuSubheading}>
                                    TRACK your politicians & 
                                    <br/>give your thoughts on votes
                                </Typography>
                                <Typography className={classes.hhuActionPrompt} variant="body1">Sign up to get the latest on your local politics</Typography>
                                
                        </Grid>

                        <Grid item xs={6}>
                            <MainCardButton/>
                        </Grid>
                </div>
                

                </Grid>
            </Paper>
        ); 
    }

class MainCardButton extends Component {
    render(){
        let buttonTextStyle = {
            fontFamily: 'Fact-ExpandedMedium',
            fontWeight: 'bold',
            fontSize: '1.15em',
            color: 'black',
            margin: '0.15em'
        };

        return(
            <div>
                {/* <NavLink to=...ACTIVECARD> */}
                    {/* <Button variant="outlined" style={buttonTextStyle} className={buttonTextStyle}>
                        Sign up
                    </Button> */}
                    <button className="hhu-button">
                        Sign Up
                    </button>

                {/* </NavLink> */}
            </div>
            );    
    }
}

//for horizontal alignment of radio group buttons:
const styles = theme => ({
    group: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    }
});


export class MainCardsController extends Component{
    //TODO: can either do as <ul> with <li> * # of cards or MaterialUI Radio
    render(){

        //for horizontal alignment of radio group buttons:
            

        return(
            <div className="home-hero-unit-controls">

                <ul className="home-hero-unit-dots">
                    <RadioGroup style={{display: 'flex', width: 'auto', height: 'auto', flexWrap: 'nowrap', flexDirection: 'row'}}>
                        <Radio
                            label={<li to='/login' className="home-hero-unit-dots li"/>}
                            inputProps={{ 'aria-label': 'A' }}
                        />   
                        <Radio
                            label={<li to='/politicians' className="home-hero-unit-dots li"/>}
                            inputProps={{ 'aria-label': 'B' }}
                        />
                        <Radio
                            label={<li to='/parties' className="home-hero-unit-dots li"/>}
                            inputProps={{ 'aria-label': 'D' }}
                        />
                        <Radio
                            label={<li to='/votes' className="home-hero-unit-dots li"/>}
                            inputProps={{ 'aria-label': 'E' }}
                        />
                    </RadioGroup>
                </ul>
            </div>
        );
    }
}


