import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class VoteTable extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    console.log('voteTable', this.props);
  }

  render () {
    return (
      <div>
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <MaterialTable
          title='Vote History'
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
            filtering: true,
            sorting: true,
            exportButton: true
          }}
          parentChildData={(row, rows) => rows.find(a => a.party === row._id)}
        />
      </div>
    );
  }
}

export default VoteTable;
