import React, {Component} from 'react';
import {BarChart, Bar, PieChart, Pie, Sector, Cell, Text, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {setupArrayForReCharts} from "../../functions/setupArrayForReCharts";

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
    console.log('count', count);
    console.log('tag', tagData);
    console.log('vote', voteData);
    this.setState({loading: false, tagData: tagData, voteData: voteData});
}

export class VoteCharts extends Component {
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
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
                    <BarChart data={voteData}
                              width={500} height={300}
                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray='3 3'/>
                        <XAxis dataKey='name'/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar name='How Politicians Voted' dataKey='value' fill='rgb(0, 146, 69)'/>
                    </BarChart>
                </div>
            );
        } else {
            return (<> Loading data... </>);
        }
    }
}

export default VoteCharts;
