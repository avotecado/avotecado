import React, { Component } from 'react';
import MaterialTable from 'material-table';

export class VoteTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('votetable', this.props);
  }

  render() {
    return (
      <div>
        <MaterialTable
          title='Vote History'
          columns={[
            { title: 'Vote Number', field: '_id' },
            { title: 'Vote Date', field: 'voteDate' },
            { title: 'Meeting Type', field: 'meetingType' },
            { title: 'Description of Agenda', field: 'agendaDescription' },
            { title: 'Decision', field: 'decision' },
            { title: 'Votes', field: 'votes' },
            { title: 'Tags', field: 'tags' }
          ]}
          data={this.props.votes}
          options={{
            filtering: true
          }}
        />
      </div>
    );
  }
}

export default VoteTable;
