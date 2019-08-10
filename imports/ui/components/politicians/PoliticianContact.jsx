import React, {Component} from 'react';
import {helveticaBlackExtended_2em} from "../../styles";
import { withStyles } from '@material-ui/styles';
import { useStylesPoliticians } from './PoliticiansStyles';

const nameStyle = { color: 'white', backgroundColor: 'black' };
const councilTitleSpanStyle = { fontFamily: 'Fact-Expanded', fontSize: '0.65em' };
const councilTitleURLStyle = { color: 'black', textDecorationColor: 'rgb(0, 146, 69)', textDecorationStyle: 'wavy' };
const partyTextStyle = {fontFamily: 'Fact-Expanded', fontSize: '0.65em', marginBottom: '1em'};

class PoliticianContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politician: []
        };
    }

    componentDidMount() {
        this.setState({politician: this.props.politician});
    }

    componentDidUpdate(prevProps) {
        if (prevProps.politician !== this.props.politician) {
            this.setState({politician: this.props.politician});
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({politician: nextProps.politician});
    }

    render() {
        const {classes} = this.props;
        if (this.state.politician) {
            return (
                <>
                    <div style={helveticaBlackExtended_2em}>
                        <span className={classes.nameStyle}>
                            {this.state.politician.firstname} {this.state.politician.lastname}
                        </span>
                        <div className={classes.councilTitleSpanStyle}>
                            <a href={this.state.politician.profileURL} className={classes.councilTitleURLStyle}>
                                {this.state.politician.title}
                            </a>
                        </div>
                        <div className={classes.partyTextStyle}>
                            {this.state.politician.party}
                        </div>
                    </div>
                    <div style={{fontFamily: 'Fact-Expanded'}}>
                        {Object.entries(this.props.politician.contact).map((entry, index) => (
                            (entry[1].length > 0) ?
                                <span style={{display: 'flex', alignContent: 'center', marginBottom: '0.3em'}} key={index}>
                                    <span style={{marginRight: '0.5em'}}>
                                        <img src={`../../../icons/${entry[0]}.svg`}/>
                                    </span>
                                    {entry[1]}
                                </span>
                                :
                                null
                        ))}
                    </div>
                </>
            );
        } else {
            return (<> Loading Contact Info </>);
        }
    }
}

export default withStyles(useStylesPoliticians)(PoliticianContact);
