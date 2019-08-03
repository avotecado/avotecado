import React, {Component} from 'react';
import {Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,} from 'recharts';

const voteOptionsArray = ['In Favour', 'In Opposition', 'Absent', 'Abstain', 'No Vote', 'Declared Conflict'];

function setupRadarChartData(that, politicianVoteData) {
    let voteCountPerTag = [];
    let outputData = [];

    politicianVoteData.forEach(voteObjectEntry => {
        voteObjectEntry.tags.forEach(tagEntry => {
            voteCountPerTag[tagEntry] = voteCountPerTag[tagEntry] || [tagEntry];

            for (let voteOption of voteOptionsArray) {
                voteCountPerTag[tagEntry][voteOption] = voteCountPerTag[tagEntry][voteOption] || 0;
            }

            let currentVoteOption = voteObjectEntry.votes;
            voteCountPerTag[tagEntry][currentVoteOption ] += 1;
        })
    });

    for (let entry in voteCountPerTag) {
        let entryForOutputData = {
            tag: entry,
            inFavour: voteCountPerTag[entry]['In Favour'],
            inOpposition: voteCountPerTag[entry]['In Opposition'],
            absent: voteCountPerTag[entry]["Absent"],
            abstain: voteCountPerTag[entry]["Abstain"],
            noVote: voteCountPerTag[entry]["No Vote"],
            declaredConflict: voteCountPerTag[entry]["Declared Conflict"]
        };
        outputData.push(entryForOutputData);
    }
    return outputData;
}

class PoliticianRadarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: []
        };
    }

    componentDidMount() {
        let that = this;
        let politicianVoteData = this.props.votes;
        let radarChartData = setupRadarChartData(that, politicianVoteData);
        this.setState({loading: false, data: radarChartData});
    }


    render() {
        if (this.state.loading) {
            return (<> Loading... </>);
        } else {
            return (
                <div>
                    <RadarChart data={this.state.data}
                                cx={300} cy={250} outerRadius={150} width={500} height={500}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="tag"/>
                        <PolarRadiusAxis/>
                        <Radar name="In Favor" dataKey="inFavour" stroke="green" fill="green" fillOpacity={0.4}/>
                        <Radar name="In Opposition" dataKey="inOpposition" stroke="red" fill="red" fillOpacity={0.4}/>
                        <Radar name="Declared Conflict" dataKey="declaredConflict" stroke="yellow" fill="yellow" fillOpacity={0.4}/>
                        <Radar name="No Vote" dataKey="noVote" stroke="black" fill="black" fillOpacity={0.4}/>
                        <Radar name="Abstain" dataKey="abstain" stroke="grey" fill="grey" fillOpacity={0.4}/>
                        <Radar name="Absent" dataKey="absent" stroke="blue" fill="blue" fillOpacity={0.4}/>
                    </RadarChart>
                </div>
            );
        }
    }
}

export default PoliticianRadarChart;