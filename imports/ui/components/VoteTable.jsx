import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class VoteTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentDidMount () {
    console.log('voteTable', this.props);
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState !== this.state) {
      console.log('cdu voteTable', this.state);
    }
  }

  render () {
    return (
      <div>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <MaterialTable
          title={<span style={{ fontFamily: 'Helvetica Black Extended', fontSize: '1.5em', color: 'white', backgroundColor: 'black' }}>Vote History</span>}
          columns={[
            { title: 'Vote Number', field: '_id' },
            { title: 'Description of Agenda', field: 'agendaDescription' },
            { title: 'Decision', field: 'decision' },
            { title: 'Votes', field: 'votes' },
            { title: 'Vote Date', field: 'voteDate', type: 'date', defaultSort: 'desc' },
            { title: 'Meeting Type', field: 'meetingType' },
            { title: 'Tags', field: 'tags' }
          ]}
          data={this.props.votes}
          options={{
            selection: true,
            filtering: true,
            sorting: true,
            exportButton: true,
            headerStyle: {
              fontFamily: 'Fact-ExpandedMedium',
              backgroundColor: '#009245',
              color: '#FFF'
            },
            rowStyle: {
              fontFamily: 'Courier',
              fontSize: '0.5em'
            }
          }}
          parentChildData={(row, rows) => row.votes === rows.votes}
          onSelectionChange={(rows) => this.setState({ selected: rows })}
        />
      </div>
    );
  }
}

export default VoteTable;
