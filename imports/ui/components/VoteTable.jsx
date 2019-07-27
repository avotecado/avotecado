import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export class VoteTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedForDataViz: null,
      selectedMoreDetails: null
    };
    this.tableDisplay = this.tableDisplay.bind(this);
    this.detailDisplay = this.detailDisplay.bind(this);
    this.visualizationDisplay = this.visualizationDisplay.bind(this);
  }

  componentDidMount () {
    console.log('voteTable', this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState !== this.state) {
      console.log('cdu voteTable', this.state);
    }
  }

  tableDisplay () {
    return (
      <>
        <MaterialTable
          elevation='0'
          title={<span style={{ fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'white', backgroundColor: 'black' }}>Vote History</span>}
          columns={[
            { title: 'Vote Number', field: '_id', headerStyle: { padding: '1px' }, cellStyle: { fontFamily: 'Fact-Expanded' } },
            { title: 'Description of Agenda', field: 'agendaDescription', cellStyle: { fontFamily: 'Fact-Expanded', fontSize: '0.65em' } },
            { title: 'Decision', field: 'decision', headerStyle: { padding: '1px' }, cellStyle: { fontFamily: 'Fact-Expanded' } },
            { title: 'Vote Date', field: 'voteDate', type: 'date', defaultSort: 'desc', cellStyle: { fontFamily: 'Fact-Expanded', fontSize: '0.65em' } },
            { title: 'Tags', field: 'tags', cellStyle: { fontFamily: 'Fact-Expanded' } }
          ]}
          data={this.props.votes}
          options={{
            selection: true,
            filtering: true,
            sorting: true,
            exportButton: true,
            headerStyle: { fontFamily: 'Fact-ExpandedMedium', backgroundColor: '#009245', color: '#FFF' },
            rowStyle: rowData => ({ backgroundColor: (this.state.selectedMoreDetails && this.state.selectedMoreDetails._id === rowData._id) ? 'rgba(0, 146, 69, 0.25)' : '#FFF' })
          }}
          parentChildData={(row, rows) => row.votes === rows.votes}
          onSelectionChange={(rows) => this.setState({ selectedForDataViz: rows })}
          onRowClick={((evt, selectedRow) => {
            if (!(selectedRow === this.state.selectedMoreDetails)) {
              this.setState({ selectedMoreDetails: selectedRow });
            } else {
              this.setState({ selectedMoreDetails: null });
            }
          })}
        />
      </>
    );
  }

  detailDisplay () {
    return this.state.selectedMoreDetails ? (
      <div>
        {this.state.selectedMoreDetails._id}
      </div>
    ) : (
      <div style={{ height: '100%',
        fontFamily: 'Helvetica Black Extended',
        fontSize: '4em',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center' }}>
        Select a row to display info.
      </div>
    );
  }

  visualizationDisplay () {
    return this.state.selectedForDataViz ? (
      <div>
        {JSON.stringify(this.state.selectedForDataViz)}
      </div>
    ) : (
      <div style={{ height: '100%',
        fontFamily: 'Helvetica Black Extended',
        fontSize: '3.35em',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center' }}>
        Select rows to visualize info.
      </div>
    );
  }

  render () {
    return (
      <div>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <Grid container style={{ height: '100%', display: 'flex', alignItems: 'center' }} spacing={2} alignItems='stretch'>
          <Grid item xs={9}>
            {this.tableDisplay()}
          </Grid>
          <Grid container xs={3}>
            <Grid item xs>
              <Paper>
                {this.detailDisplay()}
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper>
                {this.visualizationDisplay()}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default VoteTable;
