import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {routes} from "../../../utils/routerPaths";
import {useStylesParties} from "./PartiesStyles";
import { withStyles } from '@material-ui/core';

class PartiesSelect extends Component {
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
        const {classes} = this.props;
        return (
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {this.state.parties.map((party, index) => (
                    <NavLink to={`${routes.parties}`+ '?' + `${party._id}`} key={index} style={{textDecorationLine: 'none'}}>
                        <Button variant='outlined' className={classes.partiesSelectButtonTextStyle}>
                            {party._id}
                        </Button>
                    </NavLink>
                ))}
            </div>
        );
    }
}

export default withStyles(useStylesParties)(PartiesSelect);
