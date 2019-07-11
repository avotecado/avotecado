import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

export default class PoliticianContact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politician: []
    };
  }

  componentDidMount () {
    console.log('polContact cdm: ', this.props.politician);
    this.setState({ politician: this.props.politician });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.politician !== this.props.politician) {
      console.log('polContact cdu: ', this.props.politician);
      this.setState({ politician: this.props.politician });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ politician: nextProps.politician });
  }

  render () {
    if (this.state.politician) {
      console.log('polContact: ', this.state.politician);
      return (
        <div>
          {this.state.politician.profileURL}
          {this.state.politician.address}
          {this.state.politician.phone}
          {this.state.politician.mobile}
          {this.state.politician.email}
          {this.state.politician.twitter}
          {this.state.politician.website}
          {this.state.politician.facebook}
          {this.state.politician.linkedin}
          {this.state.politician.instagram}
        </div>
      );
    } else {
      return (<> Loading Contact Info </>);
    }
  }
}
