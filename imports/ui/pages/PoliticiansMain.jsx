import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';

import Politicians from '../../api/Politicians';
import Followed from '../../api/Followed';
import Comments from '../../api/Comments';

// import { PoliticianContext } from '../context/PoliticianContext';
// import Async from 'react-async';

import PoliticianHeaderText from '../components/politicians/PoliticianHeaderText';
import PoliticianRatingSystem from '../components/politicians/PoliticianRatingSystem';
import PoliticiansSelect from '../components/politicians/PoliticiansSelect';
import PoliticiansPic from '../components/politicians/PoliticiansPic';
import PoliticianFollow from '../components/politicians/PoliticianFollow';
import PoliticianContact from '../components/politicians/PoliticianContact';
import PoliticianVoteHistory from '../components/politicians/PoliticianVoteHistory';
import CommentSystem from '../components/comments/CommentSystem';

import {Container} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const profilePictureStyle = {display: 'flex', alignItems: 'center', flexFlow: 'column wrap'};
const contactStyle = {display: 'flex', justifyContent: 'center', flexFlow: 'column wrap'};

class PoliticiansMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            politiciansArray: [],
            followedArray: [],
            selectedPolitician: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.politiciansArray !== this.props.politiciansArray) {
            this.setState({politiciansArray: this.props.politiciansArray});
        }
        if (prevProps.followedArray !== this.props.followedArray) {
            this.setState({followedArray: this.props.followedArray});
        }
        if ((prevProps !== this.props) && (this.props.location !== '')) {
            let selectedPolitician = this.props.location.search.replace('?', '');
            this.setState({selectedPolitician: selectedPolitician});
        }
    }

    render() {
        let politiciansArray = this.props.politiciansArray;
        let followedArray = this.props.followedArray;
        let selectedPolitician = this.state.selectedPolitician;
        let politician = politiciansArray.find(function (element) {
            return (element._id === selectedPolitician);
        });
        let userID = Meteor.userId();

        if (!this.state.selectedPolitician) {
            return (
                <>
                    <Container display='flex' maxWidth='lg' style={{marginTop: '0em'}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <PoliticianHeaderText/>
                            </Grid>
                            <Grid item xs={12}>
                                <Container maxWidth='md' style={{display: 'flex', flexFlow: 'row wrap'}}>
                                    <PoliticiansSelect politiciansArray={politiciansArray}/>
                                </Container>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            );
        } else {
            return (
                <>
                    <Container display='flex' maxWidth='lg' style={{marginTop: '0em'}}>
                        <Grid container spacing={3}>

                            <Grid item xs={12}>
                                <PoliticianHeaderText/>
                            </Grid>

                            <Grid item xs={12}>
                                <Container maxWidth='md'>
                                    <PoliticiansSelect politiciansArray={politiciansArray}/>
                                </Container>
                            </Grid>
                            <Grid item xs={6} style={profilePictureStyle}>
                                <PoliticiansPic politician={politician}/>
                                {Meteor.user() && this.props.followedArray ?
                                    <PoliticianFollow politician={politician} followedArray={followedArray}
                                                      userID={userID}/> : null}
                            </Grid>

                            <Grid item xs={6} style={contactStyle}>
                                <PoliticianContact politician={politician}/>
                            </Grid>

                            <Grid item xs={12}>
                                <PoliticianVoteHistory politician={politician}/>
                            </Grid>

                            <Grid item xs={12} style={{marginBottom: '-0.25em'}}/>

                            <Grid item xs={12}>
                                <PoliticianRatingSystem politician={politician}/>
                            </Grid>

                            <Grid item xs={12} style={{marginTop: '1em'}}/>

                            <Grid item xs={12}>
                                <CommentSystem politician={politician}/>
                            </Grid>

                        </Grid>
                    </Container>
                </>
            );
        }
    }
}

export default withTracker(() => {
    Meteor.subscribe('Politicians', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    Meteor.subscribe('Followed', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    Meteor.subscribe('Comments', {
        onReady: function () {
        },
        onError: function () {
        }
    });
    return {
        politiciansArray: Politicians.find().fetch(),
        followedArray: Followed.find({_id: Meteor.userId()}).fetch(),
        commentsArray: Comments
    };
})(PoliticiansMain);
