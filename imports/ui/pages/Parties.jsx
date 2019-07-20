import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import PartyCollection from '/imports/api/Party';

import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export class Parties extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      parties: '',
      politicianArray: []
    };
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps !== this.props) {
      this.setState({ parties: this.props.parties });
      this.props.parties.forEach((party, index) => {
        Meteor.call('politicians.findByParty', party._id, (error, politicianResultArray) => {
          if (error) {
            console.log(error.reason);
          } else {
            this.setState({ politicianArray: [...this.state.politicianArray, { party: party._id, politicians: politicianResultArray }] });
            if (this.state.parties.length === this.state.politicianArray.length) {
              // console.log('cdu state.polarray in === state', this.state.politicianArray);
              this.setState({ loading: false });
            }
          }
        });
      });
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div>
          <Container>
            Loading...
          </Container>
        </div>
      );
    } else {
      let subHeaderStyle = { fontFamily: 'Fact-ExpandedBlack', fontSize: '2.0em', color: 'white', textAlign: 'center', backgroundColor: 'black' };
      let parties = this.props.parties;
      let politicianArray = this.state.politicianArray;
      // console.log(this.props.parties);
      // console.log(this.state.politicianArray);
      return (
        <div>
          <Container display='flex' maxWidth='lg'>
            {
              parties.map((party, index) => {
                return <div key={index} style={{ marginBottom: '1em' }}>
                  <div>
                    <span style={subHeaderStyle}>{party._id}</span> <br />
                    <span>
                      <a href={`https://wikipedia.org/wiki/${party.ideology}`}><img src='/icons/wiki_w.svg' width='16px' />
                        {party.ideology}
                      </a>
                    </span> <br />
                    <span>
                      <a href={`https://wikipedia.org/wiki/${party.politicianPosition}`}><img src='/icons/wiki_w.svg' width='16px' />
                        {party.politicianPosition}
                      </a>
                    </span>
                  </div>
                  <span style={{ fontFamily: 'Fact-ExpandedMedium' }}>Councillors in {party._id}:</span>
                  <br />
                  {politicianArray.map(arrayItem => {
                    return arrayItem.politicians.map((individualPolitician, index) => {
                      if (arrayItem.party === party._id) {
                        return <span key={individualPolitician.party + index}>
                          <Link to={`/politicians?${individualPolitician._id}`}>{individualPolitician.firstname} {individualPolitician.lastname}</Link> <br />
                        </span>;
                      }
                    });
                  }
                  )}
                </div>;
              })
            }
          </Container>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  Meteor.subscribe('Party', {
    onReady: function () { console.log('onReady'); },
    onError: function () { console.log('onError'); }
  });
  return { parties: PartyCollection.find().fetch() };
})(Parties);
