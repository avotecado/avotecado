import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import VoteCollection from '/imports/api/VoteCollection';

import VoteTable from '../components/votes/VoteTable';

import {Container} from '@material-ui/core';

export class Votes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            votes: null,
            politicianArray: []
        };
    }

    componentDidMount() {
        Meteor.call('politicians.getAll', null, (err, res) => {
            return err ? console.log(err.error) : this.setState({politicianArray: res});
        });
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: false, votes: this.props.votes});
        }
    }

    render() {
        if (!this.state.loading && this.state.votes) {
            return (
                <div>
                    <Container>
                        <VoteTable politicians={this.state.politicianArray} votes={this.props.votes}/>
                    </Container>
                </div>
            );
        } else {
            return (
                <div>
                    <Container>
                        Loading...
                    </Container>
                </div>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('VoteCollection', {
        onReady: function () {},
        onError: function () {}
    });
    return {votes: VoteCollection.find().fetch()};
})(Votes);
