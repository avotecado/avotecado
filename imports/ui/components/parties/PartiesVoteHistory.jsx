import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import MaterialTable from "material-table";
import {Container} from "@material-ui/core";
import {matchVoteToPoliticianTableDetailPanel} from "../../../utils/matchVoteToPoliticianTableDetailPanel";

const COLUMNS = [
    { title: 'Vote Number', field: '_id', defaultSort: 'desc', headerStyle: {padding: '1px'}, cellStyle: {fontFamily: 'Fact-Expanded'} },
    { title: 'Date', field: 'voteDate', type: 'date', cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'} },
    { title: 'Agenda', field: 'agendaDescription', cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'} },
    { title: 'Decision', field: 'decision', headerStyle: {padding: '1px'}, cellStyle: {fontFamily: 'Fact-Expanded'} },
    { title: 'Tags', field: 'tags', cellStyle: {fontFamily: 'Fact-Expanded'}}
];

const OPTIONS = {
    pageSizeOptions: [5, 10, 20, 50, 100],
    selection: true,
    filtering: true,
    sorting: true,
    exportButton: true,
    headerStyle: {fontFamily: 'Fact-ExpandedMedium', backgroundColor: '#009245', color: '#FFF'},
};

class PartiesVoteHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            votes: [],
            politicians: [],
            selectedForDataViz: []
        }
    }

    componentDidMount() {
        this.getVotesForPoliticianArray();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            this.getVotesForPoliticianArray();
        }
    }

    getVotesForPoliticianArray() {
        Meteor.call('vote.getAll', (err, votesArray) => {
            let politicianArray = this.props.politicianArray[0].politicians;
            let politicianIDArray = [];
            for (let i = politicianArray.length; i-- > 0;) {
                politicianIDArray.push(politicianArray[i]._id);
            }
            let voteByPoliticianObject = {politicianIDArray: politicianIDArray, votesArray: votesArray};
            Meteor.call('vote.voteByArrayOfPolitician', voteByPoliticianObject, (err, voteArrayFiltered) => {
                if (err) {
                    console.log(err);
                } else {
                    Meteor.call('politicians.getAll', (err, politicianResultArray)=> {
                        if (err) {
                            this.setState({error: err.reason});
                        } else {
                            this.setState({
                                loading: false,
                                votes: voteArrayFiltered,
                                politicians: politicianResultArray});
                        }
                    });
                }
            });
        });
    }

    getMaterialTable() {
        let politician = this.state.politicians;
        return (
            <MaterialTable
                elevation={0}
                title={
                    <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black'}}>
                            Vote History
                        </span>
                }
                data={this.state.votes}
                columns={COLUMNS}
                options={OPTIONS}
                onSelectionChange={(rows) => this.setState({selectedForDataViz: rows})}
                detailPanel={rowData => {
                    let voteResult = matchVoteToPoliticianTableDetailPanel(rowData, politician);
                    return (
                        <Container style={{fontFamily: 'Fact-Expanded'}}>
                            {voteResult}
                        </Container>
                    );
                }}
            />
        );
    }

    render() {
        if (this.state.loading) {
            return (
                <>
                    Loading...
                </>
            );
        } else {
            return (
                <div>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
                    {this.getMaterialTable()}
                </div>
            );
        }
    }
}

export default PartiesVoteHistory;