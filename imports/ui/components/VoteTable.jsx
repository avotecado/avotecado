import React, {Component} from 'react';

import VisualizationCharts from './votes/VisualizationCharts';

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

export class VoteTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedForDataViz: [],
            selectedMoreDetails: null
        };
        this.tableDisplay = this.tableDisplay.bind(this);
        this.detailDisplay = this.detailDisplay.bind(this);
        this.visualizationDisplay = this.visualizationDisplay.bind(this);
    }

    componentDidMount() {
        console.log('voteTable', this.props);
    }

    componentDidUpdate(prevState) {
        if (prevState !== this.state) {
            console.log('cdu voteTable', this.state);
        }
    }

    tableDisplay() {
        return (
            <>
                <MaterialTable
                    elevation='0'
                    title={<span style={{
                        fontFamily: 'Helvetica Black Extended',
                        fontSize: '1.5em',
                        color: 'white',
                        backgroundColor: 'black'
                    }}>Vote History</span>}
                    columns={[
                        {
                            title: 'Vote Number',
                            field: '_id',
                            headerStyle: {padding: '1px'},
                            cellStyle: {fontFamily: 'Fact-Expanded'}
                        },
                        {
                            title: 'Description of Agenda',
                            field: 'agendaDescription',
                            cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'}
                        },
                        {
                            title: 'Decision',
                            field: 'decision',
                            headerStyle: {padding: '1px'},
                            cellStyle: {fontFamily: 'Fact-Expanded'}
                        },
                        {
                            title: 'Vote Date',
                            field: 'voteDate',
                            type: 'date',
                            defaultSort: 'desc',
                            cellStyle: {fontFamily: 'Fact-Expanded', fontSize: '0.65em'}
                        },
                        {title: 'Tags', field: 'tags', cellStyle: {fontFamily: 'Fact-Expanded'}}
                    ]}
                    data={this.props.votes}
                    options={{
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
            </>
        );
    }

    detailDisplay() {
        return this.state.selectedMoreDetails ? (
            <div>
                {this.state.selectedMoreDetails._id}
            </div>
        ) : (
            <div style={emptyStyle}>
                Select a row to display info.
            </div>
        );
    }

    visualizationDisplay() {
        return (this.state.selectedForDataViz.length > 0) ? (
            <div>
                <VisualizationCharts selectedForDataViz={this.state.selectedForDataViz}/>
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
                        <Grid item xs={6}>
                            <Container>
                                {this.detailDisplay()}
                            </Container>
                        </Grid>
                        <Grid item xs={6}>
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
