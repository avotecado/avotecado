import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './home-style.css';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import {routes} from "../../../utils/routerPaths";
import Button from "@material-ui/core/Button";

const buttonStyle = {
    fontFamily: 'Helvetica Black Extended',
    color: 'white',
    fontSize: '1.25em',
    backgroundColor: '#009245',
    textTransform: 'none'
};
class HomeHeroButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            homeHeroButtons: [],
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
        if (this.state.loggedIn) {
            return (
                <div>
                    <NavLink to={routes.politicians} style={{textDecorationLine: 'none'}}>
                        <Button type='submit' variant='contained' style={buttonStyle}>
                            Check out your councillors!
                        </Button>
                    </NavLink>
                </div>
            );
        } else {
            return (
                <div>
                    <NavLink to={routes.register} style={{textDecorationLine: 'none'}}>
                        <Button type='submit' variant='contained' style={buttonStyle}>
                            Register
                        </Button>
                    </NavLink>
                </div>
            );
        }
    }
}

export default withTracker(() => { return {user: Meteor.user()}; })(HomeHeroButton);