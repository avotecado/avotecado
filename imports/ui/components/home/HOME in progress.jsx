import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {Container} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Home from "../../pages/Home";


import vanImage from '../../../../client/images/vancouverSpecialsKevinLanthier.jpg';
import politiciansGroup from '../../../../client/images/AvotecadoPoliticians4.png';
import cityHall from '../../../../client/images/CityHallVancouverArchives1937.jpg';
import partiesOldCityHall from '../../../../client/images/Vancouver_city_hall_archive.jpg';
import partiesCityHallTrees from '../../../../client/images/CityHallArchives.jpg';
import usersDowntownPhoto from '../../../../client/images/aditya-chinchure-DrizqCuAV2o-unsplash.jpg';
import votesMap from '../../../../client/images/Vancouver_vector_map_Spacing_ca.jpg';
import votesVancouverSpecial from '../../../../client/images/vancouverSpecialsKevinLanthier2.jpg';
import './home-style.css';

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

const useStyles = makeStyles(theme => ({
    
    homeHeroUnit: {
        position: 'absoulte',
        top: 0,
        marginBottom: theme.spacing(4),

        backgroundImage: `url(${votesMap})`,

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        /* more to add re: positioning */
        // transition: opacity fade-duration ease-out;
        opacity: 0.75,
        height: '450px',
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
        display: 'block',
        marginTop: '20px',
        paddingLeft: '3.5em',
    },
    
    hhuHeader: {
        height: '50px',
        fontSize: '1.25em',
        fontFamily: 'Helvetica Black Extended',
    },
    
    hhuTitle: {
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'Fact-Expanded',
    },
    
    hhuSubheading: {
        fontSize: '1.5em',
        fontFamily: 'Fact-ExpandedMedium',
    },
    
    hhuActionPrompt:{
        fontSize: '18px',
        fontFamily: 'Fact-Expanded',
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
        paddingLeft: '3.5em',
        paddingTop: '1.20em',
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

}));

//TODO fix this outside of HomeMainCard Component - makeStyles ? inline ?
//const classes = useStyles();

// const useStyles = makeStyles(theme => ({
//     typography: {
//         padding: theme.spacing(2),
//     },
//     }));
//If above used, wrap component with withStyles(useStyles) & import {withStyles, makeStyles }


class HomeMainCard extends Component {
    //TODO: change to class component in order to have state & therefore also change to 
    //      in-line styling.
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            //TODO: 
            //set initialHomeHeroUnits to home SignUp link ?
            homeHeroUnits: [],
            selectedHeroUnit: null,
            //TODO: 
            //set initialHomeHeroArray with data Above ??? that will be moved to collection ?
            //      or is it unnecessary given above: 
            //HomeHeroUnitArray: []
        };
    }

    componentDidMount(){
        console.log('did Mount: ' + this.props);
        console.log(homeHeroUnits);
        this.setState({
            homeHeroUnits: homeHeroUnits,
            selectedHeroUnit: 'login',
            loading: false
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.props);
        if (prevProps !== this.props && this.state.loading){
                this.setState({
                    homeHeroUnits: [...this.props.homeHeroUnits]
                })}

        if ((prevProps !== this.props) && (this.props.location !== '')) {
            let selectedHeroUnit = this.props.location.search.replace('?', '');
            this.setState({selectedHeroUnit: selectedHeroUnit});
            console.log(selectedHeroUnit);
        }

        console.log(this.state);

    }

    //TODO fix this outside of HomeMainCard Component - makeStyles ? inline ?
    //const classes = useStyles();
        //moved outside class
    render(){
        console.log(this);
        console.log(this.state);
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
        //is this enough ? do I need to do anything with state ?
        //TODO: set backgroundImage here or further down this.props... ???
            const { classes } = this.props;
            console.log(this.props);
            console.log(classes);


            //TODO: does it make sense, that 
            let homeHeroUnits = this.state.homeHeroUnits;
            let selectedHeroUnit = this.state.selectedHeroUnit;

            //TODO: set backgroundImage here or above with const {classes, backgroundImage} ???
            //let backgroundImage = this.props.selectedHeroUnit.backgroundImage;
            //TODO: with collection: may need to above to selectedHeroUnitID
            //      then - selectedHeroUnit = homeHeroUnits.find((homeHeroUnit) => { return homeHeroUnit._id === selectedHeroUnitId });
    

            return(
                <Paper className={classes.homeHeroUnit} style={{
                    position: 'absoulte',
                    top: 0,
                    marginBottom: theme.spacing(4),

                    backgroundImage: `url(${votesMap})`,

                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    /* more to add re: positioning */
                    // transition: opacity fade-duration ease-out;
                    opacity: 0.75,
                    height: '450px',
                }}>
                {
                    <img 
                        style={{ display: 'none' }}
                        src='photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'
                        alt='background'
                    />
                }
                    <Grid container spacing={1} alignItems="flex-end">
                    <div style={ { width: '75em' } }>
                            <Grid item xs={12} className={classes.hhuFrame}>
                                <Grid container 
                                    direction="column" 
                                    alignItems="flex-start"
                                >
                                    <Typography className={classes.hhuHeader} variant="body1">
                                        icon here
                                    </Typography>
                                    <Typography className={classes.hhuTitle}>avotecado </Typography>
                                    <Typography className={classes.hhuSubheading} variant="h4">
                                        Track your local politicians & see how they voted municpal matters
                                    </Typography>
                                    <Typography className={classes.hhuActionPrompt} variant="body1">Sign up to get the latest on your local politics</Typography>
                                    </Grid>    
                            </Grid>

                            {/* <Grid item xs={6} className={classes.hhuButtonContainer}>
                                <HomeHeroButton className={classes.hhuButton}/>
                            </Grid> */}
                    </div>
                    

                    </Grid>
                </Paper>
            ); 
        }      
    }
}
export default withStyles(useStyles)(HomeMainCard);

// class HomeHeroButton extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             //loading: true,
//             homeHeroUnits: []
//         };
//     }

//     componentDidMount() {
//         console.log(this.props);
//         this.setState({homeHeroUnits: this.state.homeHeroUnits});
//         console.log(this.state.homeHeroUnits);
//     }

//     render(){
//         console.log(this.state);

//         let buttonTextStyle = {
//             fontFamily: 'Fact-ExpandedMedium',
//             fontWeight: 'bold',
//             fontSize: '1.15em',
//             color: 'black',
//             margin: '0.15em'
//         };

//         return(
//             <div>
//                 {this.state.homeHeroUnits.map((homeHeroUnit, index) => (
//                     <NavLink to={'/' + `${homeHeroUnit.name}`} key={index} style={{textDecorationLine: 'none'}}>
//                         <button className="hhu-button">
//                             {homeHeroUnit.buttonText}
//                         </button>
//                     </NavLink>
//                 ))}
//             </div>
//             );    
//     }
// }
// export withStyles(useStyles)(HomeHeroButton);


import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import vanImage from '../../../../client/images/vancouverSpecialsKevinLanthier.jpg';

import politiciansGroup from '../../../../client/images/AvotecadoPoliticiansMiddleGroup2.png';
console.log(politiciansGroup);
console.log(vanImage);

import './home-style.css';

const useStyles = makeStyles(theme => ({

    homeHeroUnit: {
        position: 'absoulte',
        top: 0,
        marginBottom: theme.spacing(4),
        backgroundImage: `url(${vanImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        /* more to add re: positioning */
        // transition: opacity fade-duration ease-out;
        opacity: 0.75,
        height: '450px',
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
        display: 'block',
        marginTop: '20px',
        paddingLeft: '3.5em',
    },
    
    hhuHeader: {
        height: '50px',
        fontSize: '1.25em',
        fontFamily: 'Helvetica Black Extended',
    },
    
    hhuTitle: {
        display: 'inline-block',
        fontSize: '20px',
        fontFamily: 'Fact-Expanded',
    },
    
    hhuSubheading: {
        fontSize: '1.5em',
        fontFamily: 'Fact-ExpandedMedium',
    },
    
    hhuActionPrompt:{
        fontSize: '18px',
        fontFamily: 'Fact-Expanded',
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
        paddingLeft: '3.5em',
        paddingTop: '1.20em',
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

        return(

            <Paper className={classes.homeHeroUnit}>
            
            {
                <img 
                    style={{ display: 'none' }}
                    src='photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'
                    alt='background'
                />
            }

                <Grid container spacing={1} alignItems="flex-end">
                <div style={ { width: '75em' } }>
                        <Grid item xs={12} className={classes.hhuFrame}>
                            <Grid container 
                                direction="column" 
                                alignItems="flex-start"
                            >
                                <Typography className={classes.hhuHeader} variant="body1">
                                    icon here
                                </Typography>
                                <Typography className={classes.hhuTitle}>avotecado </Typography>
                                <Typography className={classes.hhuSubheading} variant="h4">
                                    Track your local politicians & see how they voted municpal matters
                                </Typography>
                                <Typography className={classes.hhuActionPrompt} variant="body1">Sign up to get the latest on your local politics</Typography>
                                </Grid>    
                        </Grid>

                        <Grid item xs={6} className={classes.hhuButtonContainer}>
                            <HomeHeroButton className={classes.hhuButton}/>
                        </Grid>
                </div>
                

                </Grid>
            </Paper>
        ); 
    }

class HomeHeroButton extends Component {
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
                    <button className="hhu-button">
                        Sign Up
                    </button>
            </div>
            );    
    }
}