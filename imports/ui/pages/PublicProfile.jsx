import React, {Component} from 'react';
import {withTracker} from "meteor/react-meteor-data";
import {Meteor} from "meteor/meteor";
import Container from "@material-ui/core/Container";

function extracted() {
    console.log(this.props);
    let userId = this.props.location.search.replace('?', '');
    console.log(userId);
    Meteor.call('followed.findByUser', userId, (err,res) => {
        if (err) {
            console.log(err.reason);
        } else {
            let user = (Meteor.users.find({_id: userId}).fetch());
            this.setState({loading: false, user: user[0], followed: res});
        }
    });
}

class PublicProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        extracted.call(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            extracted.call(this);
        }
    }

    render() {
        if (this.state.loading) {
            return (<>Loading...</>);
        } else {
            let userStringified = JSON.stringify(this.state.user);
            console.log(this.state.user);
            return (
                <div>
                    <Container>
                        {userStringified} <br/>
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
})(PublicProfile);
