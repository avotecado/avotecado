import React, {Component} from 'react';

export default class PoliticianPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: []
        };
    }

    componentDidMount() {
        this.setState({politician: this.props.politician});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.politician !== this.props.politician) {
            this.setState({politician: this.props.politician});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({politician: nextProps.politician});
    }

    render() {
        if (this.state.politician) {
            // console.log('polPFP: ', this.state.politician);
            return (
                <div style={{display: 'flex', backgroundColor: 'rgba(0,146,69, 1)'}}>
                    <img alt='image'
                         style={{
                             mixBlendMode: 'screen', filter: 'grayscale(100%) brightness(100%) contrast(200%)'
                         }}
                         src={'photos/' + this.state.politician.firstname + '-' + this.state.politician.lastname + '.jpg'}/>
                </div>
            );
        } else {
            return (<> Loading Image </>);
        }
    }
}
