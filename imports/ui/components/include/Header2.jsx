import React from 'react';
import {Meteor} from 'meteor/meteor';

import {makeStyles} from '@material-ui/core/styles';
import {Link, NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {withTracker} from "meteor/react-meteor-data";
import VoteCollection from "../../../api/VoteCollection";
import {Votes} from "../../pages/Votes";

const classes = {
    root: {
        marginTop: '-1em',
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

class Header2 extends React.Component {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            if (Meteor.user()) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        }
    }

    render() {
        console.log(this.state.loggedIn);
        return (
            <div>
                <div style={classes.root}>
                    <Container maxWidth='lg'>
                        <Toolbar disableGutters>

                            <Typography style={classes.title}>
                                <NavLink to='/' activeStyle={{
                                    fontSize: '4em',
                                    fontWeight: 'bold',
                                    color: 'black',
                                    textDecorationLine: 'none'
                                }}>
                                    a
                                    <span>vote</span>
                                    {/* <span style={{ fontFamily: 'Helvetica Black Extended', WebkitTextFillColor: 'rgba(255,255,255,0.001)', WebkitTextStrokeWidth: '0.1rem', WebkitTextStrokeColor: 'rgb(0, 146, 69)' }}>vote</span> */}
                                    cado
                                </NavLink>
                            </Typography>

                            <span style={classes.links}>
                                <NavLink to='/politicians'
                                         style={linkNotActiveStyle}
                                         activeStyle={linkActiveStyle}>
                                    politicians
                                </NavLink>

                                <NavLink to='/parties'
                                         style={linkNotActiveStyle}
                                         activeStyle={linkActiveStyle}>
                                    parties
                                </NavLink>

                                <NavLink to='/votes'
                                         style={linkNotActiveStyle}
                                         activeStyle={linkActiveStyle}>
                                    votes
                                </NavLink>

                                {
                                    (this.state.loggedIn) ? (
                                        <Link to='/usersettings'>
                                            <IconButton
                                                aria-label='Account of current user'
                                                aria-controls='primary-search-account-menu'
                                                aria-haspopup='true' color='inherit' style={{color: '#009245'}}
                                            >
                                                <AccountCircle style={{fontSize: '2em'}}/>
                                            </IconButton>
                                        </Link>
                                    ) : (
                                        <Link to='/login'>
                                            <IconButton
                                                aria-label='Account of current user'
                                                aria-controls='primary-search-account-menu'
                                                aria-haspopup='true' color='inherit' style={{color: 'black'}}
                                            >
                                                <AccountCircle style={{fontSize: '2em'}}/>
                                            </IconButton>
                                        </Link>
                                    )
                                }
                            </span>
                        </Toolbar>
                    </Container>
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {user: Meteor.user()};
})
(Header2);