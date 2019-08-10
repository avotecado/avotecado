import React, {Component} from 'react';
import Loading from "../../../utils/Loading";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import ErrorSuccessDisplay from "../include/errorSuccessDisplay";
import {routes} from "../../../utils/routerPaths";
import {Link} from "react-router-dom";
import PoliticianPic from "../politicians/PoliticianPic";
import Container from "@material-ui/core/Container";
import {helveticaBlackExtended_1p25em} from "../../styles";

const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationStyle: 'wavy',
    textDecorationColor: 'rgb(0,146,69)',
};

const followCardTextStyle = {
    fontFamily: 'Helvetica Black Extended',
    fontSize: '1.25em',
    color: 'black',
    width:'fit-content',
    textDecorationStyle: 'wavy',
    textDecorationColor: 'rgb(0,146,69)'
};

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
                <div style={{height:"20em"}}>
                    <Loading/>
                    <ErrorSuccessDisplay error={this.state.error}/>
                </div>
            );
        } else {
            if (this.state.politicians.length) {
                return (
                    <>
                        <Container maxWidth='xl' style={{display: 'flex', flexFlow: 'row wrap', height: '30em', overflowX: 'auto'}}>
                            {this.state.politicians.map((entry, index) => {
                                return (
                                    <Card key={index} style={{margin: '0.15em'}}>
                                        <CardContent style={cardContentStyle}>
                                            <Link to={routes.politicians + '?' + entry._id} style={followCardTextStyle}>
                                                <span style={followCardTextStyle}>
                                                    {entry.firstname + ' ' + entry.lastname}
                                                </span>
                                            </Link>
                                            <PoliticianPic politician={entry} width={'15em'}/>
                                            <span style={followCardTextStyle}>
                                                {entry.title}
                                            </span>
                                            <Link to={routes.parties + '?' + entry.party} style={followCardTextStyle}>
                                                <span style={followCardTextStyle}>
                                                    {entry.party}
                                                </span>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </Container>
                    </>
                );
            } else {
                return (
                    <div style={{display: 'flex', flexDirection: 'row', height: '20em'}}>
                        <span style={helveticaBlackExtended_1p25em}>
                            No followed politicians.
                        </span>
                    </div>
                )
            }
        }
    }
}

export default UserFollowedDisplay;