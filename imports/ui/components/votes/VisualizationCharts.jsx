import React, {Component} from 'react';
import {BarChart, Bar, PieChart, Pie, Sector, Cell, Text, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

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

function getData(count, value, data) {
    count[value] = (count[value] || 0) + 1;
    let dataToUpdate = data.find(element => element.name === value);
    if (dataToUpdate) {
        dataToUpdate.value = count[value];
    } else {
        data.push({name: value, value: count[value]});
    }
}

function setupCharts() {
    let dataToAggregate = this.props.selectedForDataViz;
    let count = [];
    let tagData = [];
    let voteData = [];
    dataToAggregate.forEach(entry => {
        entry.tags.forEach(value => {
            getData(count, value, tagData);
        });
        entry.votes.forEach(value => {
            getData(count, value, voteData);
        });
    });
    this.setState({count: count, loading: false, tagData: tagData, voteData: voteData});
}

export class VisualizationCharts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            count: [],
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
            console.log(this.state);
            return (
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <PieChart width={400} height={400}>
                        <Pie animationDuration={800} data={tagData} cx={'50%'} cy={'50%'} outerRadius={190}
                             fill='black' dataKey='value' nameKey='name' labelLine={false}
                             label={renderCustomizedLabel}>
                            {
                                tagData.map((entry, index) => <Cell key={`cell-${index}`} fill='rgb(0, 146, 69)'/>)
                            }
                        </Pie>
                    </PieChart>
                    <BarChart width={500} height={300} data={voteData}
                              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray='3 3'/>
                        <XAxis dataKey='name'/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey='value' fill='rgb(0, 146, 69)'/>
                    </BarChart>
                </div>
            );
        } else {
            return (<> Loading data... </>);
        }
    }
}

export default VisualizationCharts;
