import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import './home-style.css';
import { RadioButtonGroup } from 'material-ui';

export default class HomeMainCard extends Component{
    // constructor(props) {
    //     super.props(props);
    //     this.state = {
    //         politician: null,
    //         PagePromptImage: null,
    //         PagePromptText: null
    //     };
    // }
    render() {
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {/* this may be container for CardContent */}
                    <div className="hhu-header">Avotecado</div>
                    <div className="hhu-title">TITLE: </div>
                    <div className="hhu-subheading">
                            TRACK your politicians & 
                            <br/>give your thoughts on votes
                        <p className="hhu-action-prompt">Sign up to get the latest on your local politics</p>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <MainCardButton/>
                </Grid>
            </Grid>
        ); 
    }
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

export class MainCardsController extends Component{
    //TODO: can either do as <ul> with <li> * # of cards or MaterialUI Radio
    render(){
        return(
            <div className="home-hero-unit-controls">

                <ul className="home-hero-unit-dots">

                    <RadioGroup row>

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


