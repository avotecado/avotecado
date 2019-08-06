import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import {Container} from '@material-ui/core';

const useStyles = {
    
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

};


// const homeWithStyle = WrappedComponent => {
//     class homeWithStyle extends React.Component {
//         constructor(props){
//             super(props)
//         }
//     }
// }

function HomeWithStyles(props){
    const { classes } = props;
    return <HomeMainCard { classes }/>
}

export default HomeWithStyles