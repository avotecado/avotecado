import React, {Component} from 'react';
import {Meteor} from "meteor/meteor";
import {matchVoteToPolitician} from "../../../utils/matchVoteToPolitician";
import {COLUMNS, OPTIONS_noSelect} from "../../../utils/tablePropsShared";


import MaterialTable from "material-table";
import {Container} from "@material-ui/core";
import Loading from "../../../utils/Loading";
import {helveticaBlackExtended_1p5em} from "../../styles";


class PartiesVoteHistory extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            votes: [],
            politicians: [],
            selectedForDataViz: []
        }
    }

    componentDidMount() {
        this.setState({politicians: this.props.politiciansSubscribeArray});
        this.getVotesForPoliticianArray();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            this.getVotesForPoliticianArray();
        }
    }

    getVotesForPoliticianArray() {
        Meteor.call('vote.getAll', (err, votesArray) => {
            let politicianArray = this.props.politicianArray[0].politicians;
            let politicianIDArray = [];
            for (let i = politicianArray.length; i-- > 0;) {
                politicianIDArray.push(politicianArray[i]._id);
            }
            let voteByPoliticianObject = {politicianIDArray: politicianIDArray, votesArray: votesArray};
            Meteor.call('vote.voteByArrayOfPolitician', voteByPoliticianObject, (err, voteArrayFiltered) => {
                if (err) {
                    this.setState({error: err.reason});
                } else {
                    this.setState({
                        loading: false,
                        votes: voteArrayFiltered
                    });
                }
            });
        });
    }

    getMaterialTable() {
        let politician = this.state.politicians;
        return (
            <MaterialTable
                elevation={0}
                title={
                    <span style={helveticaBlackExtended_1p5em}>
                            Vote History
                        </span>
                }
                data={this.state.votes}
                columns={COLUMNS}
                options={OPTIONS_noSelect}
                onSelectionChange={(rows) => this.setState({selectedForDataViz: rows})}
                detailPanel={rowData => {
                    let voteResult = matchVoteToPolitician(rowData, politician);
                    return (
                        <Container style={{fontFamily: 'Fact-Expanded'}}>
                            {voteResult}
                        </Container>
                    );
                }}
            />
        );
    }

    render() {
        if (this.state.loading) {
            return (<Loading/>);
        } else {
            return (
                <div>
                    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'/>
                    {this.getMaterialTable()}
                </div>
            );
        }
    }
}

export default PartiesVoteHistory;