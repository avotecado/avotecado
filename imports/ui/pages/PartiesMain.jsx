import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import PartyCollection from '/imports/api/Party';

import {Container} from '@material-ui/core';
import PartiesSelect from "../components/parties/PartiesSelect";
import PartiesBasicInfo from "../components/parties/PartiesBasicInfo";
import PartiesHeaderText from "../components/parties/PartiesHeaderText";
import PartiesVoteHistory from "../components/parties/PartiesVoteHistory";

function removeDuplicates(politicianArray) {
    // ref: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    let existsAccumulator = {};
    return politicianArray.filter(function(partyObject) {
        return existsAccumulator.hasOwnProperty(partyObject.party) ? false : (existsAccumulator[partyObject.party] = true);
    });
}

function filterForParty(selectedParty, politicianArray) {
    return politicianArray.filter((politician) => { return politician.party === selectedParty });
}

export class PartiesMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            parties: '',
            selectedParty: null,
            politicianArray: []
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && this.state.loading) {
            this.setState({parties: this.props.parties});
            this.props.parties.forEach((party) => {
                Meteor.call('politicians.findByParty', party._id, (error, politicianResultArray) => {
                    if (error) {
                        console.log(error.reason);
                    } else {
                        this.setState({
                            politicianArray: [...this.state.politicianArray, {party: party._id, politicians: politicianResultArray}]
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
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <Container maxWidth='lg'>
                        <PartiesHeaderText/>
                    </Container>
                </div>
            );
        } else {
            let parties = this.props.parties;
            let politicianArray = this.state.politicianArray;
            let politicianArrayFilteredForDoubles = removeDuplicates(politicianArray);
            let selectedPartyId = this.state.selectedParty;
            if (!selectedPartyId) {
                return (
                    <div>
                        <Container maxWidth='lg'>
                            <PartiesHeaderText/>
                            <PartiesSelect parties={parties}/>
                        </Container>
                    </div>
                );
            } else {
                let selectedParty = parties.find((party) => { return party._id === selectedPartyId });
                let politicianArrayFilteredForSelectedParty = filterForParty(selectedPartyId, politicianArrayFilteredForDoubles);
                return (
                    <div>
                        <Container maxWidth='lg'>
                            <PartiesHeaderText/>
                            <PartiesSelect parties={parties}/>
                            <PartiesBasicInfo parties={[selectedParty]} politicianArray={politicianArrayFilteredForDoubles}/>
                            <PartiesVoteHistory
                                parties={[selectedParty]}
                                politicianArray={politicianArrayFilteredForSelectedParty}
                            />
                        </Container>
                    </div>
                );
            }
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('Party');
    return {parties: PartyCollection.find().fetch()};
})(PartiesMain);
