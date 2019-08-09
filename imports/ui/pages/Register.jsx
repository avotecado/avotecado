import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
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
import {routes} from "../../utils/routerPaths";
import Party from "../../api/Party";
import Loading from "../../utils/Loading";
import validator from 'validator';

const dateCheck = new Date(-8640000000000000);

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:before': {borderBottomColor: 'black'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loading: true,
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

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.props.parties) {
            if (Meteor.userId()) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loading: false, parties: this.props.parties});
            }
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    validateInput(userToCreate) {
        for (const key of Object.keys(userToCreate)) {
            let value = userToCreate[key];
            if (value) {
                switch (key) {
                    case 'username':
                    case 'occupation':
                    case 'prefParty':
                    case 'politicalLeaning':
                    case 'userBio':
                    case 'name': {
                        if (validator.isAlphanumeric(value)) {
                            continue;
                        } else {
                            return false;
                        }
                    }
                    default:
                        console.log('default');
                        break;
                }
            }
        }
        return true;
    }

    handleSubmit(e) {
        e.preventDefault();
        let userToCreate = {
            username: this.state.username.trim(),
            email: this.state.email.trim(),
            password: this.state.password,
            name: this.state.name.trim(),
            dob: this.state.dob.trim(),
            occupation: this.state.occupation.trim(),
            prefParty: this.state.prefParty,
            politicalLeaning: this.state.politicalLeaning.trim(),
            userBio: this.state.userBio
        };
        if (!this.validateInput(userToCreate)) {
            console.log('help');
            return this.setState({error: 'Validation error'})
        }
        Accounts.createUser(userToCreate, (error) => {
            if (error) {
                console.log(error.reason);
            } else {
                this.setState({loggedIn: true});
            }
        });
    }

    prefPartyMenu() {
        return <Select
            value={this.state.prefParty}
            onChange={this.handleChange}
            inputProps={{name: 'prefParty', id: 'prefParty'}}>
            <MenuItem value={'None'}>None</MenuItem>
            {this.state.parties.map(party => {
                return (<MenuItem value={party._id} key={party._id}> {party._id} </MenuItem>);
            })}
        </Select>;
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={routes.userSettings}/>;
        } else {
            if (this.state.loading) {
                return (<Loading/>);
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

                                        <CustomTextField name='username' label='Pick a name.'
                                                         style={{marginBottom: '0.1em'}}
                                                         required autoComplete='username' value={this.state.username}
                                                         onChange={this.handleChange}/>

                                        <CustomTextField name='password' label='Pick a password.'
                                                         type='password' style={{marginBottom: '0.1em'}}
                                                         required autoComplete='current-password'
                                                         value={this.state.password}
                                                         onChange={this.handleChange}/>

                                        <CustomTextField name='email' label='Input your email.' type='email'
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

                                        <CustomTextField id='date' name='dob'
                                                         label="What's your birth date? (YYY-MM-DD)"
                                                         type='date' style={{marginBottom: '0.1em'}}
                                                         defaultValue='1818-05-05' InputLabelProps={{shrink: true}}
                                                         onChange={this.handleChange}/>

                                        <CustomTextField name='occupation' label="What's your occupation?"
                                                         style={{marginBottom: '0.1em'}}
                                                         value={this.state.occupation}
                                                         onChange={this.handleChange}/>

                                        <FormControl>
                                            <InputLabel>Preferred Party</InputLabel>
                                            {this.prefPartyMenu()}
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
}

export default withTracker(() => {
    Meteor.subscribe('Party');
    return {
        parties: Party.find().fetch()
    };
})(Register);
