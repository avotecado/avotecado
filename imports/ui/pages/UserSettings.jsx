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

const CustomTextField = withStyles({
    root: {
        '& label.Mui-focused': {fontFamily: 'Fact-ExpandedMedium', color: '#009245'},
        '& .MuiInput-underline:before': {borderBottomColor: 'black'},
        '& .MuiInput-underline:after': {borderBottomColor: '#009245'}
    }
})(TextField);

export default class UserSettings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            name: '',
            occupation: '',
            prefParty: '',
            politicalLeaning: '',
            userBio: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log(this.props);
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit() {
        //
    }

    render() {
        if (Meteor.userId()) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <Container style={{display: 'flex', flexDirection: 'column'}}>
                            <CustomTextField name='name' label='Name' style={{marginBottom: '0.1em'}}
                                             required autoComplete='name' value={this.state.name}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='occupation' label='Occupation' style={{marginBottom: '0.1em'}}
                                             required autoComplete='occupation' value={this.state.occupation}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='politicalLeaning' label='Political Leaning'
                                             style={{marginBottom: '0.1em'}}
                                             required autoComplete='politicalLeaning'
                                             value={this.state.politicalLeaning}
                                             onChange={this.handleChange}/>
                            <CustomTextField name='userBio' label='User Bio' style={{marginBottom: '0.1em'}}
                                             required autoComplete='bio' value={this.state.userBio}
                                             onChange={this.handleChange}/>
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
// export default withTracker(() => {
//     Meteor.subscribe('UsersList', {
//         onReady: function () {
//         },
//         onError: function () {
//         }
//     });
//     return {users: Meteor.users.find({}).fetch()};
// })(UserSettings);
