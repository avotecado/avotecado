import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";

function getVotesForPoliticianArray(that) {
    Meteor.call('vote.getAll', null, (err, res) => {
        let politicianArray = that.props.politicianArray[0].politicians;
        console.log('polArray', politicianArray);
        let politicianIDArray = [];
        for (let i = politicianArray.length; i-- > 0;) {
            politicianIDArray.push(politicianArray[i]._id);
        }
        let votesArray = res;
        let voteByPoliticianObject = {politicianID: politicianIDArray, votesArray: votesArray};
        console.log(voteByPoliticianObject);
        // Meteor.call('vote.voteByArrayOfPolitician', voteByPoliticianObject, (err, res) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         that.setState({loading: false, votes: res});
        //     }
        // });
    });
}

class PartiesVoteHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        let that = this;
        getVotesForPoliticianArray.call(this, that);
    }


    render() {
        let politicianArray = JSON.stringify(this.props.politicianArray);
        console.log(this.props.politicianArray);
        return (
            <div>
                {politicianArray}
            </div>
        );
    }
}

export default PartiesVoteHistory;