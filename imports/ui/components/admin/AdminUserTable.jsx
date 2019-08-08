import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class AdminUserTable extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        let usersList = this.props.users;
        return (
            <div>
                User directory: <br/>
                {usersList.map((userEntry, index) => {
                    return (
                        <ul key={index}>
                            <li key={userEntry.username}>
                                <NavLink to={'/user?' + `${userEntry._id}`}>
                                    {userEntry.username}
                                </NavLink>
                            </li>
                        </ul>
                    );
                })}
            </div>
        );
    }
}

export default AdminUserTable;