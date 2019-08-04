import React from 'react';
import {Redirect} from 'react-router-dom';

import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import {Container, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:before': {borderBottomColor: 'black'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {password: '', name: '', occupation: '', prefParty: '', politicalLeaning: '', userBio: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            let user = this.props.user;
            if (user._id === Meteor.userId()) {
                this.setState({
                    name: user.name,
                    occupation: user.occupation,
                    prefParty: user.prefParty,
                    politicalLeaning: user.politicalLeaning,
                    userBio: user.userBio
                });
            } else {
                this.setState({loading: false, error: true});
            }
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let updateObject = {
            name: this.state.name,
            occupation: this.state.occupation,
            prefParty: this.state.prefParty,
            politicalLeaning: this.state.politicalLeaning,
            userBio: this.state.userBio
        };
        Meteor.call('user.updateUserProfile', updateObject, (err, res) => {
            if (err) {
                console.log(err.reason);
            } else {
                this.setState(initialState);
            }
        })
    }

    render() {
        if (Meteor.userId()) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Container style={{display: 'flex', flexDirection: 'column'}}>
                            <CustomTextField name='name' label='Name' style={{marginBottom: '0.1em'}}
                                             autoComplete='name' value={this.state.name}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='occupation' label='Occupation' style={{marginBottom: '0.1em'}}
                                             autoComplete='occupation' value={this.state.occupation}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='politicalLeaning' label='Political Leaning'
                                             style={{marginBottom: '0.1em'}}
                                             autoComplete='politicalLeaning'
                                             value={this.state.politicalLeaning}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='userBio' label='User Bio' style={{marginBottom: '0.1em'}}
                                             autoComplete='bio' value={this.state.userBio}
                                             onChange={this.handleChange}/>

                            <FormControl>
                                <InputLabel>Preferred Party</InputLabel>
                                <Select
                                    value={this.state.prefParty}
                                    onChange={this.handleChange}
                                    inputProps={{name: 'prefParty', id: 'prefParty'}}>
                                    <MenuItem value={'None'}>None</MenuItem>
                                    <MenuItem value={'NPA'}>NPA</MenuItem>
                                    <MenuItem value={'Green'}>Green</MenuItem>
                                    <MenuItem value={'OneCity'}>OneCity</MenuItem>
                                    <MenuItem value={'COPE'}>COPE</MenuItem>
                                    <MenuItem value={'Independent'}>Independent</MenuItem>
                                </Select>
                            </FormControl>

                            <Button type='submit' variant='contained' style={{
                                fontFamily: 'Helvetica Black Extended',
                                color: 'white',
                                fontSize: '1.25em',
                                backgroundColor: '#009245',
                                textTransform: 'none'
                            }}>
                                Update Profile
                            </Button>
                        </Container>
                    </form>
                </div>
            );
        } else {
            return <Redirect to='/login'/>
        }
    }
}

//
export default withTracker(() => {
    Meteor.subscribe('SingleUser', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    return {user: Meteor.users.find({_id: Meteor.userId()}).fetch()[0]};
})(UserSettings);
