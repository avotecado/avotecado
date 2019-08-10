import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {routes} from "../../../utils/routerPaths";

const buttonTextStyle = {
    fontFamily: 'Fact-ExpandedMedium',
    fontWeight: 'bold',
    fontSize: '1.15em',
    color: 'black',
    margin: '0.15em'
};

export default class PartiesSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            parties: []
        };
    }

    componentDidMount() {
        this.setState({parties: this.props.parties});
    }

    render() {
        return (
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {this.state.parties.map((party, index) => (
                    <NavLink to={`${routes.parties}`+ '?' + `${party._id}`} key={index} style={{textDecorationLine: 'none'}}>
                        <Button variant='outlined' style={buttonTextStyle}>
                            {party._id}
                        </Button>
                    </NavLink>
                ))}
            </div>
        );
    }
}

