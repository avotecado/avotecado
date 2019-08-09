import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './home-style.css';

const homeHeroButtons = [
    {name: 'login', buttonText: 'SIGN UP'},
    // {name: 'politicians', buttonText: 'EXPLORE'}
]

const useStyles = {

    hhuButton: {
        padding: '10px 20px',
        border: '3px solid black',
        background: 'transparent',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Fact-ExpandedMedium',
        fontWeight: 'bold',
        fontSize: '1.25em'
    },
    hhuButtonContainer: {
        paddingLeft: '3.5em',
        paddingTop: '1.20em',
        marginTop: '1.2em'
    },
}

class HomeHeroButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            homeHeroButtons: [],
        };
    }

    componentDidMount() {
        this.setState({
            homeHeroButtons: homeHeroButtons,
                        });
    }

    render(){
        return(
            
            <div>
                {this.state.homeHeroButtons.map((homeHeroButton, index) => (
                    <NavLink to={'/' + `${homeHeroButton.name}`} key={index} style={{textDecorationLine: 'none'}}>
                        <button className="hhu-button">
                            {homeHeroButton.buttonText}
                        </button>
                    </NavLink>
                ))}
            </div>
            );    
    }
}
export default withStyles(useStyles)(HomeHeroButton);