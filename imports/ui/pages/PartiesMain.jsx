import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import PartyCollection from '/imports/api/Party';
import Politicians from '/imports/api/Politicians';
import {Container} from '@material-ui/core';
import PartiesSelect from "../components/parties/PartiesSelect";
import PartiesBasicInfo from "../components/parties/PartiesBasicInfo";
import PartiesHeaderText from "../components/parties/PartiesHeaderText";
import PartiesVoteHistory from "../components/parties/PartiesVoteHistory";
import ErrorSuccessDisplay from "../components/include/errorSuccessDisplay";

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
            parties: [],
            selectedParty: null,
            politiciansSubscribeArray: [],
            politicianArray: []
        };
    }

    componentDidUpdate(prevProps) {
        if ((prevProps !== this.props) && (this.props.location !== '')) {
            let selectedParty = this.props.location.search.replace('?', '');
            this.setState({selectedParty: selectedParty});
        }

        if (prevProps !== this.props && this.state.loading) {
            this.setState({parties: this.props.parties, politiciansSubscribeArray: this.props.politicians});
            this.props.parties.forEach((party) => {
                Meteor.call('politicians.findByParty', party._id, (error, politicianResultArray) => {
                    if (error) {
                        this.setState({error: error.reason});
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
                            <ErrorSuccessDisplay error={this.state.error} />
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
                                politiciansSubscribeArray={this.state.politiciansSubscribeArray}
                            />
                            <ErrorSuccessDisplay error={this.state.error} />
                        </Container>
                    </div>
                );
            }
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('Party');
    Meteor.subscribe('Politicians');
    return {
        parties: PartyCollection.find().fetch(),
        politicians: Politicians.find().fetch()
    };
})(PartiesMain);
