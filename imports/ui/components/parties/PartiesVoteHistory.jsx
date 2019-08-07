import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import MaterialTable from "material-table";
import {Container} from "@material-ui/core";

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

function getVotesForPoliticianArray(that) {
    Meteor.call('vote.getAll', null, (err, votesArray) => {
        let politicianArray = that.props.politicianArray[0].politicians;
        let politicianIDArray = [];
        for (let i = politicianArray.length; i-- > 0;) {
            politicianIDArray.push(politicianArray[i]._id);
        }
        let voteByPoliticianObject = {politicianIDArray: politicianIDArray, votesArray: votesArray};
        Meteor.call('vote.voteByArrayOfPolitician', voteByPoliticianObject, (err, voteArrayFiltered) => {
            if (err) {
                console.log(err);
            } else {
                that.setState({loading: false, votes: voteArrayFiltered});
            }
        });
    });
}

class PartiesVoteHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        let that = this;
        getVotesForPoliticianArray.call(this, that);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            let that = this;
            getVotesForPoliticianArray.call(this, that);
        }
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
                        detailPanel={rowData => {
                            let voteResult = [];
                            let length = rowData.votes.length;
                            for (let i = 0; i < length; i++) {
                                voteResult.push(
                                    <span key={i}>
                                    {/*{politician[i].firstname} {politician[i].lastname}:*/}
                                        {rowData.votes[i]}<p/>
                                </span>
                                );
                            }
                            return (
                                <Container style={{fontFamily: 'Fact-Expanded'}}>
                                    {voteResult}
                                </Container>
                            );
                        }}
                    />
                </div>
            );
        }
    }
}

export default PartiesVoteHistory;