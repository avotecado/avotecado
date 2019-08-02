import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import PoliticianRatingDisplay from './PoliticianRatingDisplay';
import PoliticianRatingChart from "./PoliticianRatingChart";

import Ratings from '../../../api/Ratings';

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const buttonStyle = {
    fontFamily: 'Helvetica Black Extended',
    color: 'white',
    fontSize: '1.25em',
    backgroundColor: '#009245',
    textTransform: 'none'
};

function ratingForm() {
    return <form onSubmit={this.handleSubmit.bind(this)}>
        <Select value={this.state.userRating}
                onChange={this.handleChange.bind(this)}
                inputProps={{name: 'userRating', id: 'userRating'}}>
            <MenuItem disabled={true} value={'Select a Number'}>Select a Number</MenuItem>
            <MenuItem value={0}>0 - Worst</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5 - Best</MenuItem>
        </Select>
        <br/>
        <Button type='submit' variant='contained' style={buttonStyle}>
            Rate
        </Button>
    </form>;
}

class PoliticianRatingSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            politician: null,
            userRating: 'Select a Number'
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: false})
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        let userRating = {userId: Meteor.userId(), rating: this.state.userRating};
        Meteor.call('ratings.add', this.props.politician._id, userRating, function(err, res) {
            if (err) {
                console.log(err.reason);
            } else {
                console.log(res);
            }
        })
    };

    render() {
        if (this.state.loading) {
            return (<> Loading... </>)
        } else {
            let ratingArray = this.props.ratingArray;
            let subHeaderStyle = { fontFamily: 'Helvetica Black Extended', fontSize: '1.8em', color: 'black', textAlign: 'center', marginBottom: '-0.2em' };
            return (
                <div>
                    <Grid container spacing={3}>
                        <span style={subHeaderStyle}>
                            How do people feel about {this.props.politician.firstname} {this.props.politician.lastname}?
                        </span>
                        <Grid item xs={4} style={{display: 'flex', justifyContent: 'center'}}>
                            <strong>Add something here?</strong>
                        </Grid>
                        <Grid item xs={4}>
                            <PoliticianRatingChart ratingArray={ratingArray}/>
                        </Grid>
                        <Grid item xs={4} style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                            <PoliticianRatingDisplay ratingArray={ratingArray}/>
                            <p />
                            Why not rate them yourself?
                            {!Meteor.user() ? ratingForm.call(this) : <>Login, or make an account first!</>}
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

export default withTracker((props) => {
    Meteor.subscribe('Ratings', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    return {
        ratingArray: Ratings.find({_id: props.politician._id}).fetch()
    }
})(PoliticianRatingSystem);