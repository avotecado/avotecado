import React, { Component } from 'react';

export default class PoliticianPic extends Component {
  constructor (props) {
    super(props);
    this.state = {
      politician: []
    };
  }

  componentDidMount () {
    this.setState({ politician: this.props.politician });
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.politician !== this.props.politician) {
      this.setState({ politician: this.props.politician });
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ politician: nextProps.politician });
  }

  render () {
    if (this.state.politician) {
      // console.log('polPFP: ', this.state.politician);
      return (
        <div>
          <img alt='image' src={'photos/' + this.state.politician.firstname + '-' + this.state.politician.lastname + '.jpg'} />
        </div>
      );
    } else {
      return (<> Loading Image </>);
    }
  }
}
