import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {routes} from "../../../utils/routerPaths";

export default class PoliticianSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politiciansArray: []
        };
    }

    componentDidMount() {
        this.setState({politiciansArray: this.props.politiciansArray});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.politiciansArray !== this.props.politiciansArray) {
            this.setState({politiciansArray: this.props.politiciansArray});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({politiciansArray: nextProps.politiciansArray});
    }

    render() {
        let buttonTextStyle = {
            fontFamily: 'Fact-ExpandedMedium',
            fontWeight: 'bold',
            fontSize: '1.15em',
            color: 'black',
            margin: '0.15em'
        };
        return (
            <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                {this.state.politiciansArray.map((politician, index) => (
                    <NavLink to={`${routes.politicians}`+ '?' + index} key={index} style={{textDecorationLine: 'none'}}>
                        <Button variant='outlined' style={buttonTextStyle}>
                            {politician.firstname} {politician.lastname}
                        </Button>
                    </NavLink>
                ))}
            </div>
        );
    }
}
