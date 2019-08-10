import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import MaterialTable from "material-table";
import PoliticianRadarChart from "./PoliticianRadarChart";
import {OPTIONS_noSelect} from "../../../utils/tablePropsShared";
import Loading from "../../../utils/Loading";
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";

const cellStyleRegularText = {fontFamily: 'Fact-Expanded'};
const cellStyleSmallText = {fontFamily: 'Fact-Expanded', fontSize: '0.65em'};

const COLUMNS = [
    {title: 'Vote Number', field: '_id', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText},
    {title: 'Description of Agenda', field: 'agendaDescription', cellStyle: cellStyleSmallText},
    {title: 'Decision', field: 'decision', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText},
    {title: 'Vote', field: 'votes', type: 'string', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText},
    {title: 'Tags', field: 'tags', cellStyle: cellStyleRegularText},
    {title: 'Date', field: 'voteDate', type: 'date', defaultSort: 'desc', cellStyle: cellStyleSmallText}
];

class PoliticianVoteHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            votes: null
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        this.getVotesForPolitician();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            this.getVotesForPolitician();
        }
    }

    getVotesForPolitician() {
        Meteor.call('vote.getAll', null, (err, votesArray) => {
            let politician = this.props.politician._id;
            let voteByPoliticianObject = {politicianID: politician, votesArray: votesArray};
            Meteor.call('vote.voteByPolitician', voteByPoliticianObject, (err, votes) => {
                if (err) {
                    this.setState({error: err.error});
                } else {
                    this.setState({loading: false, votes: votes});
                }
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>);
        } else {
            return (
                <div>
                    <PoliticianRadarChart votes={this.state.votes}/>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
                    <MaterialTable
                        elevation='0'
                        title={
                            <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black'}}>
                                Vote History of {this.props.politician.firstname} {this.props.politician.lastname}
                            </span>
                        }
                        columns={COLUMNS}
                        data={this.state.votes}
                        options={OPTIONS_noSelect}
                    />
                    <ErrorSuccessDisplay error={this.state.error}/>
                </div>
            );
        }
    }
}

export default PoliticianVoteHistory;