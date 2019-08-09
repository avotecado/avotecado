import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

import PoliticiansPFP from '../politicians/PoliticiansPic';
import CommentSystem from '../comments/CommentSystem';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class HomeSpotlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: null
        };
    }

    componentDidMount() {
        let politicianID = (Math.floor((Math.random() * 11))).toString();
        Meteor.call('politicians.findByID', politicianID, (err, res) => {
            if (err) {
                console.log(err.error);
            } else {
                this.setState({politician: res[0]});
            }
        });
    }

    render() {
        let subHeaderStyle = {fontFamily: 'Helvetica Black Extended', fontSize: '2.0em'};
        let contactStyle = {display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column wrap'};
        let politicianLinkStyle = {color: 'black', textDecorationColor: 'rgb(0, 146, 69)', textDecorationStyle: 'wavy'};

        if (this.state.politician) {
            let politician = this.state.politician;
            return (
                <>
                    <Grid item xs={6} style={contactStyle}>
                        <PoliticiansPFP politician={politician}/>
                        <Link to={`/politicians?${politician._id}`} style={politicianLinkStyle}>
                            <Typography align='center' style={subHeaderStyle}>
                                {politician.firstname} {politician.lastname}
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs={6} style={contactStyle}>
                        <CommentSystem politician={politician}/>
                    </Grid>
                </>
            );
        } else {
            return (<> Loading... </>);
        }
    }
}
