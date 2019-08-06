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
//TODO: needed or not ? for button ?
//import './home-style.css';

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

        //TODO: adjust once dynamically called
        //signUpMap TODO: change votesMap to signUpMap

        //mixBlendMode: 'screen', 
        //filter: 'grayscale(100%) brightness(100%) contrast(200%)'
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
        height: '10px',
        fontSize: '1.25em',
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
        paddingTop: '1.0em',
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
        console.log('did Mount: ' + this.props);
        console.log(homeHeroUnits);
        this.setState({
            homeHeroUnits: homeHeroUnits,
            selectedHeroUnit: 'login',
            //TODO: selectedHeroUnitBackgroundImage:
            loading: false,
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
            
            const { classes } = this.props;
            console.log(this.props);
            console.log(classes);
            let homeHeroUnits = this.state.homeHeroUnits;
            let selectedHeroUnit = this.state.selectedHeroUnit;
            console.log(selectedHeroUnit);
            console.log(homeHeroUnits);

            //TODO: set backgroundImage here or above with const {classes, backgroundImage} ???
            //let backgroundImage = this.props.selectedHeroUnit.backgroundImage;
            //TODO: with collection: may need to above to selectedHeroUnitID
            //      then - selectedHeroUnit = homeHeroUnits.find((homeHeroUnit) => { return homeHeroUnit._id === selectedHeroUnitId });
    

            return(

                <Paper className={classes.homeHeroUnit} >


                    <img alt='image'
                            style={{
                                mixBlendMode: 'screen', filter: 'grayscale(100%) brightness(80%) contrast(150%)',
                                position: 'relative',
                                height: '450px',
                                objectFit: 'cover',
                                width: '100%'

                            }}
                            src={'photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'}
                    />
                
                    <Grid container spacing={1} alignItems="flex-end"  >
                    <div style={ { width: '100%', position: 'absolute', height: '450px', display: 'flex' } }>
                            <Grid item xs={12} className={classes.hhuFrame}>
                                <Grid container 
                                    direction="column" 
                                    alignItems="flex-start"
                                >
                                        <Typography className={classes.hhuHeader} variant="body1" >
                                            {selectedHeroUnit.header}
                                        </Typography>
                                        <Typography className={classes.hhuTitle} >avotecado - VANCOUVER </Typography>
                                        <Typography className={classes.hhuSubheading} variant="h4" >
                                            Track your local politicians & see how they voted municpal on matters
                                        </Typography>
                                        <Typography className={classes.hhuActionPrompt} variant="body1">Sign up to get the latest on your local politics</Typography>
                                    
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

