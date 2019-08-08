import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import PoliticianRatingAverage from './PoliticianRatingAverage';
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

    componentDidMount() {
        if (this.props.ratingArray) {
            this.setState({loading: false});
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
            let subHeaderStyle = { fontFamily: 'Helvetica Black Extended', fontSize: '1.85em', color: 'black', textAlign: 'center', marginBottom: '-0.2em' };
            return (
                <div>
                    <Grid container spacing={3}>
                        <span style={subHeaderStyle}>
                            How do people feel about {this.props.politician.firstname} {this.props.politician.lastname}?
                        </span>
                        <Grid item xs={4} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <PoliticianRatingChart ratingArray={ratingArray}/>
                        </Grid>
                        <Grid item xs={4} style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
                            <PoliticianRatingAverage ratingArray={ratingArray}/>
                        </Grid>
                        <Grid item xs={4} style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                            <p />
                            Why not rate them yourself?
                            {Meteor.user() ?
                                ratingForm.call(this)
                                :
                                <> <p/>Login, or make an account first!</>}
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

export default withTracker((props) => {
    Meteor.subscribe('Ratings');
    return {ratingArray: Ratings.find({pid: props.politician._id}).fetch()}
})(PoliticianRatingSystem);