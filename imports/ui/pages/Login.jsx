import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:before': {borderBottomColor: 'black'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (Meteor.userId()) {
            this.setState({ loggedIn: true });
        }
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
        // console.log(e.target.name, e.target.value, (typeof e.target.value));
    }

    handleSubmit(e) {
        let that = this;
        e.preventDefault();
        Meteor.loginWithPassword(this.state.username, this.state.password, function (error) {
            if (error) {
                console.log('There was an error:' + error.reason);
            } else {
                that.setState({ loggedIn: true });
            }
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/usersettings'/>;
        } else {
            return (
                <div>
                    <Container style={{ display: 'flex', flexDirection: 'column' }}>
                        <form onSubmit={this.handleSubmit}>
                            <CustomTextField name='username' label='Username' style={{marginBottom: '0.1em'}}
                                             required autoComplete='username' value={this.state.username}
                                             onChange={this.handleChange}/>

                            <CustomTextField name='password' label='Password' type='password'
                                             style={{marginBottom: '0.1em'}}
                                             required autoComplete='current-password' value={this.state.password}
                                             onChange={this.handleChange}/>
                            <Button type='submit' variant='contained' style={{
                                fontFamily: 'Helvetica Black Extended',
                                color: 'white',
                                fontSize: '1.25em',
                                backgroundColor: '#009245',
                                textTransform: 'none'
                            }}>
                                Login
                            </Button>
                        </form>
                    </Container>
                </div>
            );
        }
    }
}

export default Login;
