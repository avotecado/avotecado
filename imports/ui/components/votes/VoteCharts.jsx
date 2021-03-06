import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, Text, Tooltip, XAxis, YAxis} from 'recharts';
import {setupArrayForReCharts} from "../../../utils/setupArrayForReCharts";
import VoteDescriptionDialog from "../../../utils/VoteDescriptionDialog";

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index, name}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <Text style={{fontFamily: 'Fact-ExpandedMedium', backgroundColor: 'black'}} x={x} y={y} fill='white'
              textAnchor='middle' dominantBaseline='central'>
            {
                `${name}:` +
                `${(percent * 100).toFixed(0)}%`
            }
        </Text>
    );
};

function setupCharts() {
    let dataToAggregate = this.props.selectedForDataViz;
    let count = [];
    let tagData = [];
    let voteData = [];
    dataToAggregate.forEach(entry => {
        entry.tags.forEach(value => {
            setupArrayForReCharts(count, value, tagData);
        });
        entry.votes.forEach(value => {
            setupArrayForReCharts(count, value, voteData);
        });
    });
    this.setState({loading: false, tagData: tagData, voteData: voteData});
}

class VoteCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            tagData: [],
            voteData: []
        };
    }

    componentDidMount() {
        setupCharts.call(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            setupCharts.call(this);
        }
    }

    render() {
        if (!this.state.loading) {
            let tagData = this.state.tagData;
            let voteData = this.state.voteData;
            return (
                <div style={{height:'30em', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginBottom:'1em'}}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom:'1em'}}>
                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <PieChart width={400} height={400}>
                                <Pie data={tagData}
                                     animationDuration={800} cx={'50%'} cy={'50%'} outerRadius={170}
                                     fill='black' dataKey='value' nameKey='name' labelLine={false}
                                     label={renderCustomizedLabel}>
                                    {
                                        tagData.map((entry, index) => <Cell key={`cell-${index}`} fill='rgb(0, 146, 69)'/>)
                                    }
                                </Pie>
                            </PieChart>
                            <span style={{marginTop:'-1em'}}>
                                Vote Tag Make Up
                            </span>
                        </div>
                        <BarChart data={voteData}
                                  width={600} height={300}
                                  margin={{top: 5, right: 30, left: 30, bottom: 5}}>
                            <CartesianGrid strokeDasharray='3 3'/>
                            <XAxis dataKey='name'/>
                            <YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Bar name='How Politicians Voted' dataKey='value' fill='rgb(0, 146, 69)'/>
                        </BarChart>
                    </div>
                    <VoteDescriptionDialog/>
                </div>
            );
        } else {
            return (<> Loading data... </>);
        }
    }
}

export default VoteCharts;
