import React, { Component } from 'react';

class PoliticianContact extends Component {
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
      // const addressIcon = '../../../public/icons/address.svg';
      console.log('polContact: ', this.state.politician);
      return (
        <>
          <div style={{ fontFamily: 'DM Serif Display', fontSize: '2em', fontWeight: 'bold' }}>
            {this.state.politician.firstname} {this.state.politician.lastname}
            <div style={{ fontFamily: 'Source Sans Pro', fontSize: '0.65em', marginTop: '-0.5em', marginBottom: '1em' }}>
              <a href={this.state.politician.profileURL} style={{ textDecoration: 'none', color: '#009245' }}>
                {this.state.politician.title}
              </a>
            </div>
          </div>
          <div style={{ fontFamily: 'Source Sans Pro' }}>
            {Object.entries(this.props.politician.contact).map((entry, index) => (
              <span style={{ display: 'flex', alignContent: 'center', marginBottom: '1vw' }} key={index} >
                <span style={{ marginRight: '0.5em' }}><img src={`../../../icons/${entry[0]}.svg`} /></span>
                {entry[1]}
              </span>
            ))}
          </div>
        </>
      );
    } else {
      return (<> Loading Contact Info </>);
    }
  }
}

export default PoliticianContact;
