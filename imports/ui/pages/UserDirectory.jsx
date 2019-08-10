import React from 'react';
import {NavLink} from 'react-router-dom';
import {routes} from "../../utils/routerPaths";
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Container from '@material-ui/core/Container';

class UserDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            usersList: []
        };
    }

    componentDidMount() {
        if (this.props.users) {
            this.setState({loading: false, usersList: this.props.users});
        }
    }


    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({
                loading: false,
                usersList: this.props.users
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <Container>
                        Fetching list of users...
                    </Container>
                </div>
            );
        } else {
            let usersList = this.state.usersList;
            return (
                <div>
                    <Container>
                        User directory: <br/>
                        {usersList.map((userEntry, index) => {
                            return (
                                <ul key={index}>
                                    <li key={userEntry.username}>
                                        <NavLink to={`${routes.user}` + '?' + `${userEntry._id}`}>
                                            {userEntry.username}
                                        </NavLink>
                                    </li>
                                </ul>
                            );
                        })}
                    </Container>
                </div>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('UsersList', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    return {users: Meteor.users.find({}).fetch()};
})(UserDirectory);
