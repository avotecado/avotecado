import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

import MaterialTable from "material-table";
import PoliticianRadarChart from "./PoliticianRadarChart";

const cellStyleRegularText = {fontFamily: 'Fact-Expanded'};
const cellStyleSmallText = {fontFamily: 'Fact-Expanded', fontSize: '0.65em'};

const COLUMNS = [
    { title: 'Vote Number', field: '_id', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText },
    { title: 'Description of Agenda', field: 'agendaDescription', cellStyle: cellStyleSmallText },
    { title: 'Decision', field: 'decision', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText },
    { title: 'Vote', field: 'votes', type: 'string', headerStyle: {padding: '1px'}, cellStyle: cellStyleRegularText },
    { title: 'Tags', field: 'tags', cellStyle: cellStyleRegularText },
    { title: 'Date', field: 'voteDate', type: 'date', defaultSort: 'desc', cellStyle: cellStyleSmallText }
];

function getVotesForPolitician(that) {
    Meteor.call('vote.getAll', null, (err, res) => {
        let politician = that.props.politician._id;
        let votesArray = res;
        let voteByPoliticianObject = {politicianID: politician, votesArray: votesArray};
        Meteor.call('vote.voteByPolitician', voteByPoliticianObject, (err, res) => {
            if (err) {
                console.log(err);
            } else {
                that.setState({loading: false, votes: res});
            }
        });
    });
}

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
        let that = this;
        getVotesForPolitician.call(this, that);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            let that = this;
            getVotesForPolitician.call(this, that);
        }
    }

    render() {
        if (this.state.loading) {
            return (<> Loading... </>);
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
                        options={{
                            pageSizeOptions: [5, 10, 20, 50, 100],
                            selection: true,
                            filtering: true,
                            sorting: true,
                            exportButton: true,
                            headerStyle: {fontFamily: 'Fact-ExpandedMedium', backgroundColor: '#009245', color: '#FFF'}
                        }}
                        onSelectionChange={(rows) => this.setState({selectedForDataViz: rows})}
                    />
                </div>
            );
        }
    }
}

export default PoliticianVoteHistory;