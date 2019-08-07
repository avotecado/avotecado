import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {withTracker} from "meteor/react-meteor-data";
import PartyCollection from "../../api/Party";
import {PartiesMain} from "./PartiesMain";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: false, user: Meteor.user()});
            console.log(Meteor.user());
        }
    }


    render() {
        if (this.state.loading) {
            return (
                <> Loading... </>
            )
        } else {
            return (
                <div>
                    {JSON.stringify(this.state.user)}
                </div>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('SingleUser');
    return {user: Meteor.user()};
})
(UserProfile);