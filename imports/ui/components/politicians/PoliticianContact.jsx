import React, {Component} from 'react';

class PoliticianContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: []
        };
    }

    componentDidMount() {
        // console.log('polContact cdm: ', this.props.politician);
        this.setState({politician: this.props.politician});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.politician !== this.props.politician) {
            // console.log('polContact cdu: ', this.props.politician);
            this.setState({politician: this.props.politician});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({politician: nextProps.politician});
    }

    render() {
        if (this.state.politician) {
            return (
                <>
                    <div style={{fontFamily: 'Helvetica Black Extended', fontSize: '2em', fontWeight: 'bold'}}>
                        <span style={{
                            color: 'white',
                            backgroundColor: 'black'
                        }}>
                            {this.state.politician.firstname} {this.state.politician.lastname}
                        </span>
                        <div style={{fontFamily: 'Fact-Expanded', fontSize: '0.65em'}}>
                            <a href={this.state.politician.profileURL} style={{
                                color: 'black',
                                textDecorationColor: 'rgb(0, 146, 69)',
                                textDecorationStyle: 'wavy'
                            }}>
                                {this.state.politician.title}
                            </a>
                        </div>
                        <div style={{fontFamily: 'Fact-Expanded', fontSize: '0.65em', marginBottom: '1em'}}>
                            {this.state.politician.party}
                        </div>
                    </div>
                    <div style={{fontFamily: 'Fact-Expanded'}}>
                        {Object.entries(this.props.politician.contact).map((entry, index) => (
                            <span style={{display: 'flex', alignContent: 'center', marginBottom: '0.3em'}} key={index}>
                <span style={{marginRight: '0.5em'}}>
                    <img src={`../../../icons/${entry[0]}.svg`}/>
                </span>
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
