import React, {Component} from 'react';

import VoteCharts from './VoteCharts';

import MUIDataTable from "mui-datatables";
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import {Container} from '@material-ui/core';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";


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

export class VoteTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedForDataViz: []
        };
        this.tableDisplay = this.tableDisplay.bind(this);
        this.visualizationDisplay = this.visualizationDisplay.bind(this);
    }

    // tableDisplay2 = () => {
    //     let data = this.props.votes;
    //     let politician = this.props.politicians;
    //     const COLUMNS2 = [
    //         {name: '_id', label: 'Vote Number', options: {filter: true, sort: true}},
    //         {name: 'voteDate', label: 'Date', options: {filter: true, sort: true}},
    //         {name: 'agendaDescription', label: 'Agenda', options: {filter: true, sort: true}},
    //         {name: 'decision', label: 'Decision', options: {filter: true, sort: true}},
    //         {name: 'tags', label: 'Tags', options: {filter: true, sort: true}},
    //         {name: 'votes', label: 'Votes', options: {display: false}}
    //     ];
    //     const OPTIONS = {
    //         filterType: "dropdown",
    //         responsive: "scroll",
    //         expandableRows: true,
    //         expandableRowsOnClick: true,
    //         renderExpandableRow: (rowData, rowMeta) => {
    //             const colSpan = rowData.length + 1;
    //             let voteResult = [];
    //             let rowDataVotes = rowData[5];
    //             let length = rowDataVotes.length;
    //             for (let i = 0; i < length; i++) {
    //                 voteResult.push(
    //                     <span key={i}>
    //                         {politician[i].firstname} {politician[i].lastname}: {rowDataVotes[i]}
    //                         <p/>
    //                     </span>
    //                 );
    //             }
    //             return (
    //                 <TableRow>
    //                     <TableCell colSpan={colSpan}>
    //                         {voteResult}
    //                     </TableCell>
    //                 </TableRow>
    //             );
    //         }
    //     };
    //
    //   return (
    //       <MUIDataTable
    //           title={"Vote History"}
    //           data={data}
    //           columns={COLUMNS2}
    //           options={OPTIONS}
    //       />
    //   );
    // };

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
                    options={{
                        pageSizeOptions: [5, 10, 20, 50, 100],
                        selection: true,
                        filtering: true,
                        sorting: true,
                        exportButton: true,
                        headerStyle: {fontFamily: 'Fact-ExpandedMedium', backgroundColor: '#009245', color: '#FFF'},
                        rowStyle: rowData => (
                            {
                                backgroundColor:
                                    (this.state.selectedMoreDetails && this.state.selectedMoreDetails._id === rowData._id)
                                        ? 'rgba(0, 146, 69, 0.25)' : '#FFF'
                            })
                    }}
                    parentChildData={(row, rows) => row.votes === rows.votes}
                    onSelectionChange={(rows) => this.setState({selectedForDataViz: rows})}
                    detailPanel={rowData => {
                        let voteResult = [];
                        let length = rowData.votes.length;
                        for (let i = 0; i < length; i++) {
                            voteResult.push(
                                <span key={i}>
                                    {politician[i].firstname} {politician[i].lastname}: {rowData.votes[i]}<p/>
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
