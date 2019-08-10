import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import {Redirect} from 'react-router-dom';
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
import {userValidation} from "../../utils/userValidation";
import validator from 'validator';
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";
import {helveticaBlackExtended_1p25em, helveticaBlackExtended_2em} from "../styles";

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

    handleSubmit(e) {
        e.preventDefault();

        const userToCreate = {
            username: validator.escape(this.state.username.trim()),
            email: validator.escape(this.state.email.trim()),
            password: validator.escape(this.state.password),
            name: validator.escape(this.state.name.trim()),
            dob: validator.escape(this.state.dob.trim()),
            occupation: validator.escape(this.state.occupation.trim())
        };

        let validate = userValidation(userToCreate);
        if (!validate.isValid) {
            return this.setState({error: validate.error});
        }

        Accounts.createUser(userToCreate, (error) => {
            if (error) {
                this.setState({error: error.reason});
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
                            <span style={helveticaBlackExtended_2em}>
                                Register an account
                            </span>
                                <Grid container spacing={2}>
                                    <Grid item xs style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={helveticaBlackExtended_1p25em}>
                                        Required: </span>

                                        <TextField name='username' label='Pick a username.'
                                                         style={{marginBottom: '0.1em'}}
                                                         required autoComplete='username' value={this.state.username}
                                                         onChange={this.handleChange}/>

                                        <TextField name='password' label='Pick a password.'
                                                         type='password' style={{marginBottom: '0.1em'}}
                                                         required autoComplete='current-password'
                                                         value={this.state.password}
                                                         onChange={this.handleChange}/>

                                        <TextField name='email' label='Input your email.' type='email'
                                                         style={{marginBottom: '0.1em'}}
                                                         required autoComplete='email' value={this.state.email}
                                                         onChange={this.handleChange}/>

                                        <span style={helveticaBlackExtended_1p25em}>
                                        Optional:
                                    </span>

                                        <TextField name='name' label="What's your name?"
                                                         style={{marginBottom: '0.1em'}}
                                                         value={this.state.name}
                                                         onChange={this.handleChange}/>

                                        <TextField id='date' name='dob'
                                                         label="What's your birth date?"
                                                         type='date' style={{marginBottom: '0.1em'}}
                                                         defaultValue='1818-05-05' InputLabelProps={{shrink: true}}
                                                         onChange={this.handleChange}/>

                                        <TextField name='occupation' label="What's your occupation?"
                                                         style={{marginBottom: '0.1em'}}
                                                         value={this.state.occupation}
                                                         inputProps={{ maxLength: 140 }}
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
                            <ErrorSuccessDisplay error={this.state.error} />
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
