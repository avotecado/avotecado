import React, {Component} from 'react';
import Loading from "../../../utils/Loading";

export default class PoliticianPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: []
        };
    }

    componentDidMount() {
        this.setState({politician: this.props.politician, width: this.props.width});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.politician !== this.props.politician) {
            this.setState({politician: this.props.politician, width: this.props.width});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({politician: nextProps.politician});
    }

    render() {
        if (this.state.politician) {
            return (
                <div style={{display: 'flex', backgroundColor: 'rgba(0,146,69, 1)'}}>
                    <img alt='image'
                         style={{
                             width: `${this.state.width}`,
                             mixBlendMode: 'screen',
                             filter: 'grayscale(100%) brightness(100%) contrast(200%)'
                         }}
                         src={'photos/' + this.state.politician.firstname + '-' + this.state.politician.lastname + '.jpg'}/>
                </div>
            );
        } else {
            return (<Loading/>);
        }
    }
}
