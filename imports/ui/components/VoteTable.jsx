import React, { Component } from 'react';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';

export class VoteTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedForDataViz: null,
      selectedMoreDetails: null
    };
    this.detailDisplay = this.detailDisplay.bind(this);
  }

  componentDidMount () {
    console.log('voteTable', this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState !== this.state) {
      console.log('cdu voteTable', this.state);
    }
  }

  detailDisplay () {
    return this.state.selectedMoreDetails ? (
      <div>
        <b>hey</b><br />
        {this.state.selectedMoreDetails._id}
      </div>
    ) : (
      <div>
        Select a row to display info.
      </div>
    );
  }

  render () {
    return (
      <div>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <Grid container style={{ display: 'flex', alignItems: 'center' }} spacing={3}>
          <Grid item xs={8}>
            <MaterialTable
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
          </Grid>
          <Grid item xs={4}>
            {this.detailDisplay()}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default VoteTable;
