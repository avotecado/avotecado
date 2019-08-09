import React, { Component } from 'react';
import {Meteor} from 'meteor/meteor';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import HomeHeroButton from './HomeHeroButton';

const homeHeroUnits = [

    {
        name: 'login',
        backgroundImagePath: '../../../../client/images/vancouverSpecialsKevinLanthier.jpg',
        header: 'icon or avotecado outlined(then remove title)',
        title: 'avotecado',
        subHeading: 'Track your local politicians & see how the voted on municipal matters',
        actionPrompt: 'Share your opinions & get the latest on your local politics',
        buttonText: 'SIGN UP'
    },
    {
        name: 'politicians',
        backgroundImagePath: '../../../../client/images/AvotecadoPoliticians4.png',
        header: '',
        title: 'Vancouver City Council ',
        subHeading: 'Learn more about your city councillors and mayor',
        actionPrompt: 'Review the voting records of the 2018-2022 elected city council',
        buttonText: 'EXPLORE'
    },
    {
        name: 'parties',
        backgroundImagePath: '../../../../client/images/CityHallArchives.jpg',
        header: '',
        title: 'Do Parties Matter ?',
        subHeading: 'How often do council members vote along party lines ?',
        actionPrompt: 'Find out what the parties represent and the councillors aligned with them',
        buttonText: 'LEARN'
    },
    {
        name: 'votes',
        backgroundImagePath: '../../../../client/images/Vancouver_vector_map_Spacing_ca.jpg',
        header: 'PRESENTED BY AVOTECADO',
        title: 'DIG DEEPER: VOTING RECORDS',
        subHeading: 'A searchable voting record of the current city council',
        actionPrompt: 'View by issue, politician, party',
        buttonText: 'RESEARCH'
    },
    {
        name: 'users',
        backgroundImagePath: './../../../client/images/aditya-chinchure-DrizqCuAV2o-unsplash.jpg',
        header: '',
        title: '',
        subHeading: '',
        actionPrompt: '',
        buttonText: ''
    }
]

const useStyles = {
    
    homeHeroUnit: {
        position: 'relative',
        top: 0,
        marginBottom: '0.25em',
        //backgroundImage: `url(${votesMap})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor:'rgba(0,146,69, 1)',
        /* more to add re: positioning */
        // transition: opacity fade-duration ease-out;
        backgroundOpacity: 0.25,
        height: '100%',

    },

    // added from : (https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Blog.js)

    hhuFrame: {
        position: 'relative',
        textDecoration: 'none',
        display: 'block',
        marginTop: '20px',
        marginLeft: '3.5em',
        width: '100%'
    },
    
    hhuHeader: {
        height: '0px',
        fontSize: '1em',
        fontFamily: 'Helvetica Black Extended',
        color: 'black',
        textShadow:  '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
    },
    
    hhuTitle: {
        display: 'inline-block',
        marginTop: '0px',
        marginBottom: '10px',
        fontSize: '20px',
        fontFamily: 'Fact-Expanded',
        fontWeight: 'bold',
        //TODO: adjust for dynamic call
        color: 'black'
    },
    
    hhuSubheading: {
        fontSize: '1.75em',
        fontFamily: 'Fact-ExpandedMedium',
        fontWeight: 'bold',
        //TODO: adjust for dynamic call
        color: 'black'
    },
    
    hhuActionPrompt:{
        marginTop: '2.5px',
        marginBottom: '10px',
        fontSize: '18px',
        fontFamily: 'Fact-Expanded',
        //TODO: adjust for dynamic call
        color: 'black'
    },
    
    hhuButton: {
        padding: '10px 20px',
        border: '3px solid black',
        background: 'transparent',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Fact-Expanded',
    },

    hhuButtonContainer: {
        paddingLeft: '0em',
        paddingTop: '0.5em',
        marginTop: '0.4em',
    },

    homeHeroUnitControls:{
        textAlign: 'center',
    },
    
    homeHeroUnitDots: {
        width: '8px',
        height: '8px',
        borderRadius: '8px',
        display: 'inline-block',
    },
};

class HomeMainCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            homeHeroUnits: [],
            selectedHeroUnit: null,
        };
    }

    componentDidMount(){
        this.setState({
            homeHeroUnits: homeHeroUnits,
            selectedHeroUnit: 'login',
            loading: false,
        });
    }

    render(){
        if (this.state.loading) {
            return (
                <div>
                    <Container>
                        Loading...
                    </Container>
                </div>
            );
        }

        else {
            
            const { classes } = this.props;
            let homeHeroUnits = this.state.homeHeroUnits;
            let selectedHeroUnit = this.state.selectedHeroUnit;

            return(
                <Paper className={classes.homeHeroUnit} >
                    <img alt='image'
                            style={{
                                mixBlendMode: 'screen', filter: 'grayscale(100%) brightness(80%) contrast(150%)',
                                position: 'relative',
                                height: '350px',
                                objectFit: 'cover',
                                width: '100%'
                            }}
                            src={'photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'}
                    />
                    <Grid container spacing={1} alignItems="flex-end"  >
                        <div style={ { width: '100%', position: 'absolute', height: '350px', display: 'flex' } }>
                                <Grid item xs={12} className={classes.hhuFrame}>
                                    <Grid container direction="column" alignItems="flex-start">
                                        <Typography className={classes.hhuTitle} >avotecado - VANCOUVER </Typography>
                                        <Typography className={classes.hhuSubheading} variant="h4" >
                                            Track your local politicians & see how they voted municpal on matters
                                        </Typography>
                                        <Typography className={classes.hhuActionPrompt} variant="body1">
                                            Sign up to get the latest on your local politics
                                        </Typography>
                                        <Grid item xs={6} className={classes.hhuButtonContainer}>
                                            <HomeHeroButton className={classes.hhuButton}/>
                                        </Grid>
                                    </Grid>    
                                </Grid>
                        </div>
                    </Grid>
                </Paper>
            ); 
        }      
    }
}

export default withStyles(useStyles)(HomeMainCard);

