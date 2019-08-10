import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import Loading from "../../utils/Loading";
import VoteCollection from '/imports/api/VoteCollection';
import VoteTable from '../components/votes/VoteTable';
import {Container} from '@material-ui/core';
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";

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
        Meteor.call('politicians.getAll', null, (err, politicians) => {
            return err ? this.setState({error: err.error}) : this.setState({politicianArray: politicians});
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
                        <ErrorSuccessDisplay error={this.state.error} />
                    </Container>
                </div>
            );
        } else {
            return (<Loading/>);
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
