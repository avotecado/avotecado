import React, {Component} from 'react';

import VoteCharts from './VoteCharts';
import {matchVoteToPoliticianTableDetailPanel} from "../../../utils/matchVoteToPoliticianTableDetailPanel";

import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';


const emptyStyle = {
    height: '100%',
    fontFamily: 'Helvetica Black Extended',
    fontSize: '2em',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center'
};

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

export class VoteTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedForDataViz: []
        };
        this.tableDisplay = this.tableDisplay.bind(this);
        this.visualizationDisplay = this.visualizationDisplay.bind(this);
    }

    tableDisplay() {
        let politician = this.props.politicians;
        return (
            <>
                <MaterialTable
                    elevation='0'
                    title={
                        <span style={{fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'black'}}>
                            Vote History
                        </span>
                    }
                    columns={COLUMNS}
                    data={this.props.votes}
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
            </>
        );
    }

    visualizationDisplay() {
        return (this.state.selectedForDataViz.length > 0) ? (
            <div>
                <VoteCharts selectedForDataViz={this.state.selectedForDataViz}/>
            </div>
        ) : (
            <div style={emptyStyle}>
                Select rows to visualize info.
            </div>
        );
    }

    render() {
        return (
            <div>
                <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
                <Grid container>
                    <Grid container>
                        <Grid item xs={12}>
                            <Container>
                                {this.visualizationDisplay()}
                            </Container>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {this.tableDisplay()}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default VoteTable;
