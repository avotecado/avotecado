import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {routes} from "../../../utils/routerPaths";

class AdminUserManagement extends Component {
    constructor(props){
        super(props);
        this.state = {error: null};
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(userId) {
        this.setState({error: null});
        console.log(userId);
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
                <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black'}}>
                    Users
                </span>
                <div style={{maxHeight: '35em', overflowY:'auto'}}>
                {usersList.map((userEntry, index) => {
                    return (
                        <ul key={index}>
                            <li key={userEntry.username}>
                                <NavLink to={`${routes.user}`+ '?' + `${userEntry._id}`}>
                                    {userEntry.username}
                                </NavLink>
                                <span onClick={() => {this.deleteUser(userEntry._id)}}>
                                    Delete user.
                                </span>
                            </li>
                        </ul>
                    );
                })}
                </div>
                <div>
                    {this.state.error}
                </div>
            </div>
        );
    }
}

export default AdminUserManagement;