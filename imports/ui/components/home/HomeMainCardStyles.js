export const useStylesHomeMainCard = {
    homeHeroUnit: {
        position: 'relative',
        top: 0,
        marginBottom: '0.25em',
        //backgroundImage: `url(${votesMap})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundColor: 'rgba(0,146,69, 1)',
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
        textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
    },

    hhuTitle: {
        display: 'inline-block',
        marginTop: '0px',
        marginBottom: '10px',
        fontSize: '20px',
        fontFamily: 'Fact-Expanded',
        fontWeight: 'bold',
        color: 'black'
    },

    hhuSubheading: {
        fontSize: '1.75em',
        fontFamily: 'Fact-ExpandedMedium',
        fontWeight: 'bold',
        color: 'black'
    },

    hhuActionPrompt: {
        marginTop: '2.5px',
        marginBottom: '10px',
        fontSize: '18px',
        fontFamily: 'Fact-Expanded',
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

    homeHeroUnitControls: {
        textAlign: 'center',
    },

    homeHeroUnitDots: {
        width: '8px',
        height: '8px',
        borderRadius: '8px',
        display: 'inline-block',
    },
};