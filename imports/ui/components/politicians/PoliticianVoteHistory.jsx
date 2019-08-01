import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import VoteCollection from '/imports/api/VoteCollection';
import MaterialTable from "material-table";

class PoliticianVoteHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            votes: null
        }
    }

    componentDidMount() {
        this.setState({ votes: null});
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            let politician = this.props.politician._id;
            let votesArray = this.props.votes;
            let voteByPoliticianObject = { politicianID: politician, votesArray: votesArray };
            // for (let i = votesArray.length; i-- > 0;) {
            //     votesArray[i].votes = votesArray[i].votes[politician];
            // }
            Meteor.call('vote.voteByPolitician', voteByPoliticianObject, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    this.setState({loading: false, votes: res});
                }
            });
            // this.setState({loading: false, votes: votesArray});
        }
    }

    render() {
        if (this.state.loading) {
            return (<> Loading... </>);
        } else {
            return (
                <div>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
                    <MaterialTable
                        elevation='0'
                        title={
                            <span style={{ fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black' }}>
                                Vote History of {this.props.politician.firstname} {this.props.politician.lastname}
                            </span>
                        }
                        columns={[
                            { title: 'Vote Number', field: '_id', headerStyle: {padding: '1px'}, cellStyle: {fontFamily: 'Fact-Expanded'} },
                            { title: 'Description of Agenda', field: 'agendaDescription', cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'} },
                            { title: 'Decision', field: 'decision', headerStyle: {padding: '1px'}, cellStyle: {fontFamily: 'Fact-Expanded'} },
                            { title: 'Vote', field: 'votes', type: 'string'},
                            { title: 'Tags', field: 'tags', cellStyle: {fontFamily: 'Fact-Expanded'}},
                            { title: 'Vote Date', field: 'voteDate', type: 'date', defaultSort: 'desc', cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'} }
                        ]}
                        data={this.state.votes}
                        options={{
                            pageSizeOptions: [5, 10, 20, 50, 100],
                            selection: true,
                            filtering: true,
                            sorting: true,
                            exportButton: true,
                            headerStyle: {fontFamily: 'Fact-ExpandedMedium', backgroundColor: '#009245', color: '#FFF'},
                            rowStyle: rowData => ({backgroundColor: (this.state.selectedMoreDetails && this.state.selectedMoreDetails._id === rowData._id) ? 'rgba(0, 146, 69, 0.25)' : '#FFF'})
                        }}
                        parentChildData={(row, rows) => row.votes === rows.votes}
                        onSelectionChange={(rows) => this.setState({selectedForDataViz: rows})}
                        onRowClick={((evt, selectedRow) => {
                            if (!(selectedRow === this.state.selectedMoreDetails)) {
                                this.setState({selectedMoreDetails: selectedRow});
                            } else {
                                this.setState({selectedMoreDetails: null});
                            }
                        })}
                    />
                </div>
            );
        }
    }
}

export default
withTracker(() => {
    Meteor.subscribe('VoteCollection', {
        onReady: function () {},
        onError: function () { console.log('error'); }
    });
    return {
        votes: VoteCollection.find().fetch()
    };
}) (PoliticianVoteHistory);