import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import FormControl from "@material-ui/core/FormControl";

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:before': {borderBottomColor: 'black'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            email: '',
            password: '',
            name: '',
            dob: '',
            occupation: '',
            prefParty: '',
            politicalLeaning: '',
            userBio: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (Meteor.userId()) {
            this.setState({loggedIn: true});
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let userToCreate = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            dob: this.state.dob,
            occupation: this.state.occupation,
            prefParty: this.state.prefParty,
            politicalLeaning: this.state.politicalLeaning,
            userBio: this.state.userBio
        };
        Accounts.createUser(userToCreate, (error) => {
            if (error) {
                console.log(error.reason);
            } else {
                this.setState({loggedIn: true});
            }
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/usersettings'/>;
        } else {
            return (
                <>
                    <Container>
                        <form onSubmit={this.handleSubmit.bind(this)}>
              <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                Register an account
              </span>
                            <Grid container spacing={2}>
                                <Grid item xs style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{
                                        fontFamily: 'Fact-ExpandedMedium',
                                        fontSize: '1.25em'
                                    }}> Required: </span>

                                    <CustomTextField name='username' label='Pick a name. (REQUIRED!)'
                                                     style={{marginBottom: '0.1em'}}
                                                     required autoComplete='username' value={this.state.username}
                                                     onChange={this.handleChange}/>

                                    <CustomTextField name='password' label='Pick a password. (REQUIRED!)'
                                                     type='password' style={{marginBottom: '0.1em'}}
                                                     required autoComplete='current-password'
                                                     value={this.state.password}
                                                     onChange={this.handleChange}/>

                                    <CustomTextField name='email' label='Input your email. (REQUIRED!)' type='email'
                                                     style={{marginBottom: '0.1em'}}
                                                     required autoComplete='email' value={this.state.email}
                                                     onChange={this.handleChange}/>

                                    <span style={{fontFamily: 'Fact-ExpandedMedium', fontSize: '1.25em'}}>
                                        Optional:
                                    </span>

                                    <CustomTextField name='name' label="What's your name?"
                                                     style={{marginBottom: '0.1em'}}
                                                     value={this.state.name}
                                                     onChange={this.handleChange}/>

                                    <CustomTextField id='date' name='dob' label="What's your birth date? (YYY-MM-DD)"
                                                     type='date' style={{marginBottom: '0.1em'}}
                                                     defaultValue='1818-05-05' InputLabelProps={{shrink: true}}
                                                     onChange={this.handleChange}/>

                                    <CustomTextField name='occupation' label="What's your occupation?"
                                                     style={{marginBottom: '0.1em'}}
                                                     value={this.state.occupation}
                                                     onChange={this.handleChange}/>

                                    <FormControl>
                                        <InputLabel>Preferred Party</InputLabel>
                                        <Select
                                            value={this.state.prefParty}
                                            onChange={this.handleChange}
                                            inputProps={{name: 'prefParty', id: 'prefParty'}}>
                                            <MenuItem disabled value={'None'}>Preferred Party</MenuItem>
                                            <MenuItem value={'None'}>None</MenuItem>
                                            <MenuItem value={'NPA'}>NPA</MenuItem>
                                            <MenuItem value={'Green'}>Green</MenuItem>
                                            <MenuItem value={'OneCity'}>OneCity</MenuItem>
                                            <MenuItem value={'COPE'}>COPE</MenuItem>
                                            <MenuItem value={'Independent'}>Independent</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>

                            <Button type='submit' variant='contained' style={{
                                fontFamily: 'Helvetica Black Extended',
                                color: 'white',
                                fontSize: '1.25em',
                                backgroundColor: '#009245',
                                textTransform: 'none'
                            }}>
                                Register
                            </Button>
                        </form>
                    </Container>
                </>
            );
        }
    }
}

export default Register;
