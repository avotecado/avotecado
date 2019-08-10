import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../../utils/routerPaths";
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";
import {helveticaBlackExtended_1p5em} from "../../styles";

class AdminUserManagement extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(userId) {
        this.setState({error: null});
        Meteor.call('comments.removeAllByUser', userId, (err) => {
            if (err) {
                this.setState({error: err.error});
            } else {
                Meteor.call('ratings.removeAllByUser', userId, (err) => {
                    if (err) {
                        this.setState({error: err.error});
                    } else {
                        Meteor.call('adminDeleteUser',userId, (err) => {
                            if (err) {
                                this.setState({error: err.error});
                            }
                        });
                    }
                });
            }
        });
    }

    render() {
        let usersList = this.props.users;
        return (
            <div>
                <span style={helveticaBlackExtended_1p5em}>
                    Users
                </span>
                <div style={{maxHeight: '35em', overflowY:'auto'}}>
                {usersList.map((userEntry, index) => {
                    return (
                        <ul key={index}>
                            <li key={userEntry.username} style={{display: "flex", flexDirection:"column"}}>
                                <NavLink to={`${routes.user}`+ '?' + `${userEntry._id}`}
                                         style={{maxWidth:"fit-content"}} >
                                    {userEntry.username}
                                </NavLink>
                                <span style={{fontWeight:'bold', color:'red', cursor: 'pointer', maxWidth:"fit-content"}}
                                      onClick={() => {this.deleteUser(userEntry._id)}}>
                                    Delete User
                                </span>
                            </li>
                        </ul>
                    );
                })}
                </div>
                <ErrorSuccessDisplay error={this.state.error} />
            </div>
        );
    }
}

export default AdminUserManagement;