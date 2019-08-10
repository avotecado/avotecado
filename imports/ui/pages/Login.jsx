import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {routes} from "../../utils/routerPaths";
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";

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
            this.setState({loggedIn: true});
        }
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        Meteor.loginWithPassword(this.state.username, this.state.password, (error) => {
            if (error) {
                this.setState({error: 'There was an error: ' + error.reason});
            } else {
                this.setState({loggedIn: true});
            }
        });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={routes.userSettings}/>;
        } else {
            return (
                <div>
                    <Container maxWidth='xs'>
                        <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
                            <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em'}}>
                                Login
                            </span>

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

                            <p />

                            <Link
                                style={{fontFamily: 'Fact-ExpandedMedium', fontSize: '1.25em', color: 'black', textDecorationStyle: 'wavy', textDecorationColor: 'rgb(0,146,69)' }}
                                to={routes.register}>
                                No account? Click here to register.
                            </Link>
                        </form>
                        <ErrorSuccessDisplay error={this.state.error} />
                    </Container>
                </div>
            );
        }
    }
}

export default Login;
