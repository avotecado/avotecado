import React from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from "meteor/react-meteor-data";
import {Link, NavLink} from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {routes} from "../../../utils/routerPaths";


const classes = {
    root: {
        marginTop: '-0.75em',
        marginBottom: '6em',
        height: '2em',
        flexGrow: 1
    },
    appBar: {
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'Helvetica Black Extended',
        fontWeight: 'bold',
        flexGrow: 1
    },
    links: {
        fontFamily: 'Helvetica Black Extended',
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'black'
    }
};

const linkNotActiveStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '1.15em',
    color: 'black',
    textDecorationLine: 'none',
    marginLeft: '2vw',
    marginRight: '2vw'
};

const linkActiveStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '1.15em',
    color: '#009245',
    textDecorationLine: 'none',
    borderBottom: '4px solid #009245',
    paddingBottom: '0.75em',
    marginLeft: '2vw',
    marginRight: '2vw'
};

const headerTextOutline = {
    fontFamily: 'Helvetica Black Extended',
    WebkitTextFillColor: 'rgba(255,255,255,0.001)',
    WebkitTextStrokeWidth: '1.75px',
    WebkitTextStrokeColor: 'rgb(0, 146, 69)'
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        if (Meteor.user()) {
            this.setState({loggedIn: true});
        } else {
            this.setState({loggedIn: false});

        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (Meteor.user()) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        }
    }

    render() {
        return (
            <div>
                <div style={classes.root}>
                    <Container maxWidth='lg'>
                        <Toolbar disableGutters>

                            <Typography style={classes.title}>
                                <NavLink to='/' activeStyle={{fontSize: '2em', fontWeight: 'bold', color: 'black', textDecorationLine: 'none'}}>
                                    a
                                    {/*vote*/}
                                     <span style={headerTextOutline}>vote</span>
                                    cado
                                </NavLink>
                            </Typography>

                            <span style={classes.links}>
                                <NavLink to={routes.politicians}
                                         style={linkNotActiveStyle}
                                         activeStyle={linkActiveStyle}>
                                    politicians
                                </NavLink>

                                <NavLink to={routes.parties}
                                         style={linkNotActiveStyle}
                                         activeStyle={linkActiveStyle}>
                                    parties
                                </NavLink>

                                <NavLink to={routes.votes}
                                        style={linkNotActiveStyle}
                                        activeStyle={linkActiveStyle}>
                                    votes
                                </NavLink>

                                {(this.state.loggedIn) ? (
                                    <Link to={routes.userSettings}>
                                        <IconButton
                                            aria-label='Account of current user'
                                            aria-controls='primary-search-account-menu'
                                            aria-haspopup='true' color='inherit' style={{color: '#009245'}}
                                        >
                                            <AccountCircle style={{fontSize: '1.5em'}}/>
                                        </IconButton>
                                    </Link>
                                ) : (
                                    <Link to={routes.login}>
                                        <IconButton
                                            aria-label='Account of current user'
                                            aria-controls='primary-search-account-menu'
                                            aria-haspopup='true' color='inherit' style={{color: 'black'}}
                                        >
                                            <AccountCircle style={{fontSize: '1.5em'}}/>
                                        </IconButton>
                                    </Link>
                                )}
                            </span>
                        </Toolbar>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withTracker(() => { return {user: Meteor.user()}; })(Header);