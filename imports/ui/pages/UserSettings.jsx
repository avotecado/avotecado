import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {routes} from "../../utils/routerPaths";
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Party from '../../api/Party';
import {Container} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {userValidation, unescapeUser} from "../../utils/userValidation";
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";

const buttonStyle = {
    fontFamily: 'Helvetica Black Extended',
    color: 'white',
    fontSize: '1.25em',
    backgroundColor: '#009245',
    textTransform: 'none'
};

const bottomButtonRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:'1em'
};

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parties: [],
            userId: '',
            password: '',
            name: '',
            occupation: '',
            prefParty: '',
            politicalLeaning: '',
            userBio: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.props.parties) {
            let userFromProps = this.props.user;
            if (Meteor.userId()) {
                let userId = Meteor.userId();
                let userObject = {
                    name: userFromProps.name,
                    occupation: userFromProps.occupation,
                    prefParty: userFromProps.prefParty,
                    politicalLeaning: userFromProps.politicalLeaning,
                    userBio: userFromProps.userBio
                };

                let unescapedUser = unescapeUser(userObject);

                this.setState({
                    parties: this.props.parties,
                    userId: userId,
                    name: unescapedUser.name,
                    occupation: unescapedUser.occupation,
                    prefParty: unescapedUser.prefParty,
                    politicalLeaning: unescapedUser.politicalLeaning,
                    userBio: unescapedUser.userBio
                });
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

        let validate = userValidation(updateObject);

        if (!validate.isValid) {
            return this.setState({error: validate.error, success: null});
        }

        Meteor.call('user.updateUserProfile', updateObject, (err, res) => {
            if (err) {
                this.setState({ error: err.reason, success: null});
            } else {
                if (res) {
                    this.setState({success: 'Profile updated!', error: null});
                }
            }
        })
    }

    handleLogout() {
        Meteor.logout();
    }

    getValue(stateVariable) {
        return stateVariable ? stateVariable : '';
    }

    prefPartyMenu() {
        return <Select
            value={this.getValue(this.state.prefParty)}
            onChange={this.handleChange}
            inputProps={{name: 'prefParty'}}>
            <MenuItem value={'None'}>None</MenuItem>
            {this.state.parties.map(party => {
                return (<MenuItem value={party._id} key={party._id}> {party._id} </MenuItem>);
            })}
        </Select>;
    }

    render() {
        if (Meteor.userId()) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Container style={{display: 'flex', flexDirection: 'column'}}>

                            <TextField name='name' label='Name' style={{marginBottom: '0.1em'}}
                                       autoComplete='name' value={this.getValue(this.state.name)}
                                       onChange={this.handleChange}/>
                            <TextField name='occupation' label='Occupation' style={{marginBottom: '0.1em'}}
                                       autoComplete='occupation' value={this.getValue(this.state.occupation)}
                                       inputProps={{ maxLength: 140 }}
                                       onChange={this.handleChange}/>
                            <TextField name='politicalLeaning' label='Political Leaning'
                                       style={{marginBottom: '0.1em'}}
                                       autoComplete='politicalLeaning'
                                       inputProps={{ maxLength: 140 }}
                                       value={this.getValue(this.state.politicalLeaning)}
                                       onChange={this.handleChange}/>
                            <TextField name='userBio' label='User Bio' style={{marginBottom: '0.1em'}}
                                       autoComplete='bio' value={this.getValue(this.state.userBio)}
                                       inputProps={{ maxLength: 140 }}
                                       onChange={this.handleChange}/>

                            <FormControl>
                                <InputLabel>Preferred Party</InputLabel>
                                {this.prefPartyMenu()}
                            </FormControl>

                            <Button type='submit' variant='contained' style={buttonStyle}>
                                Update Profile
                            </Button>
                        </Container>
                    </form>

                    <ErrorSuccessDisplay error={this.state.error} success={this.state.success} />

                    <Container style={bottomButtonRowStyle}>
                        <Button component={Link} to={`${routes.user}` + '?' + this.state.userId} variant='contained'
                                style={buttonStyle}>
                            Profile
                        </Button>
                        {Roles.userIsInRole(Meteor.user(), ['admin']) ?
                            <Button component={Link} to={routes.admin} variant='contained' style={{
                                fontFamily: 'Helvetica Black Extended',
                                color: 'white',
                                fontSize: '1.25em',
                                backgroundColor: '#dbc000',
                                textTransform: 'none'
                            }}>
                                Admin Panel
                            </Button>
                            : null}
                        <Button onClick={() => this.handleLogout()} variant='contained' style={{
                            fontFamily: 'Helvetica Black Extended',
                            color: 'white',
                            fontSize: '1.25em',
                            backgroundColor: '#D15F01',
                            textTransform: 'none'
                        }}>
                            Logout
                        </Button>
                    </Container>
                </div>
            );
        } else {
            return <Redirect to={routes.login}/>
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('SingleUser');
    Meteor.subscribe('Party');
    return {
        user: Meteor.users.find({_id: Meteor.userId()}).fetch()[0],
        parties: Party.find().fetch()
    };
})(UserSettings);