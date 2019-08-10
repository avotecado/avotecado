import React, {Component} from 'react';

class ErrorSuccessDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            success: null
        }
    }

    componentDidMount() {
        this.setState({error: this.props.error, success: this.props.success});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props){
            this.setState({error: this.props.error, success: this.props.success});
        }
    }

    render() {
        return (
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <span style={{marginTop:'1em', color:'red'}}>{this.state.error}</span>
                <span style={{marginTop:'1em', color:'green'}}>{this.state.success}</span>
            </div>
        );
    }
}

export default ErrorSuccessDisplay;