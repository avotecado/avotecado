import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import PoliticiansPFP from '../politicians/PoliticianPic';
import CommentSystem from '../comments/CommentSystem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Loading from "../../../utils/Loading";
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";
import {helveticaBlackExtended_2em} from "../../styles";

export default class HomeSpotlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: null
        };
    }

    componentDidMount() {
        let politicianID = (Math.floor((Math.random() * 11))).toString();
        Meteor.call('politicians.findByID', politicianID, (err, politician) => {
            if (err) {
                this.setState({error: err.error});
            } else {
                this.setState({politician: politician[0]});
            }
        });
    }

    render() {
        let contactStyle = {display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column wrap'};
        let politicianLinkStyle = {color: 'black', textDecorationColor: 'rgb(0, 146, 69)', textDecorationStyle: 'wavy'};

        if (this.state.politician) {
            let politician = this.state.politician;
            return (
                <>
                    <Grid item xs={6} style={contactStyle}>
                        <PoliticiansPFP politician={politician}/>
                        <Link to={`/politicians?${politician._id}`} style={politicianLinkStyle}>
                            <Typography align='center' style={helveticaBlackExtended_2em}>
                                {politician.firstname} {politician.lastname}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} style={contactStyle}>
                        <CommentSystem politician={politician}/>
                    </Grid>
                    <ErrorSuccessDisplay error={this.state.error} />
                </>
            );
        } else {
            return (<Loading/>);
        }
    }
}
