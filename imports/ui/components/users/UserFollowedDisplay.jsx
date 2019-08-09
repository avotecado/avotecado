import React, {Component} from 'react';
import Loading from "../../../utils/Loading";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";

class UserFollowedDisplay extends Component {
    constructor(props){
        super(props);
        this.state={
            loading: true,
            following: [],
            politicians: []
        }
    }
    componentDidMount() {
        let followed = this.props.followed;
        if (followed.length) {
            Meteor.call('politicians.findByMultipleId', followed[0].following, (err, politicians) => {
                if (err) {
                    this.setState({error: err.error});
                } else {
                    this.setState({politicians: politicians, loading: false});
                }
            })
        } else {
            this.setState({loading: false});
        }
    }


    render() {
        if (this.state.loading){
            return(
                <div style={{height:"15em"}}>
                    <Loading/>
                    <ErrorSuccessDisplay error={this.state.error}/>
                </div>
            );
        } else {
            if (this.state.politicians.length) {
                return (
                    <div style={{display: 'flex', flexDirection: 'row wrap', height: '15em'}}>
                        {this.state.politicians.map((entry, index) => {
                            return (
                                <Card key={index} style={{margin: '1em'}}>
                                    <CardContent>
                                        {entry.firstname}
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                );
            } else {
                return (
                    <div style={{display: 'flex', flexDirection: 'row wrap', height: '15em'}}>
                        No followed politicians.
                    </div>
                )
            }
        }
    }
}

export default UserFollowedDisplay;