import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import PartyCollection from '/imports/api/Party';

import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PartiesSelect from "../components/parties/PartiesSelect";
import PartiesBasicInfo from "../components/parties/PartiesBasicInfo";

export class Parties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            parties: '',
            selectedParty: null,
            politicianArray: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props && this.state.loading) {
            this.setState({parties: this.props.parties});
            this.props.parties.forEach((party) => {
                Meteor.call('politicians.findByParty', party._id, (error, politicianResultArray) => {
                    if (error) {
                        console.log(error.reason);
                    } else {
                        this.setState({
                            politicianArray: [...this.state.politicianArray, {
                                party: party._id,
                                politicians: politicianResultArray
                            }]
                        });
                        if (this.state.parties.length === this.state.politicianArray.length) {
                            this.setState({loading: false});
                        }
                    }
                });
            });
        }
        if ((prevProps !== this.props) && (this.props.location !== '')) {
            let selectedParty = this.props.location.search.replace('?', '');
            this.setState({selectedParty: selectedParty});
            console.log(this.state.selectedParty);
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <Container>
                        Loading...
                    </Container>
                </div>
            );
        } else {
            let parties = this.props.parties;
            let politicianArray = this.state.politicianArray;
            let selectedPartyId = this.state.selectedParty;
            let selectedParty = parties.find((party) => { return party._id === selectedPartyId });
            console.log(parties);
            console.log(selectedPartyId);
            if (!selectedPartyId) {
                return (
                    <div>
                        <Container>
                            <PartiesSelect parties={parties}/>
                        </Container>
                    </div>
                );
            } else {
                return (
                    <div>
                        <Container>
                            <PartiesSelect parties={parties}/>
                            <PartiesBasicInfo parties={[selectedParty]} politicianArray={politicianArray}/>
                        </Container>
                    </div>
                );
            }
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('Party', {
        onReady: function () {
            console.log('onReady');
        },
        onError: function () {
            console.log('onError');
        }
    });
    return {parties: PartyCollection.find().fetch()};
})(Parties);
