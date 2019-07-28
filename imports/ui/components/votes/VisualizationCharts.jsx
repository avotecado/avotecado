import React, {Component} from 'react';
import {PieChart, Pie, Sector, Cell, Text} from 'recharts';

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
    console.log(count);
    let dataToUpdate = data.find(element => element.name === value);
    if (dataToUpdate) {
        dataToUpdate.value = count[value];
    } else {
        data.push({name: value, value: count[value]});
    }
}

function setupCharts() {
    let dataToAggregate = this.props.selectedForDataViz;
    let count = this.state.count;
    let tagData = this.state.tagData;
    let voteData = this.state.voteData;
    dataToAggregate.forEach(entry => {
        entry.tags.forEach(value => {
            getData(count, value, tagData);
            console.log('tags');
        });
        entry.votes.forEach(value => {
            getData(count, value, voteData);
            console.log('votes');
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
        console.log('props cdm', this.props);
        setupCharts.call(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log('props cdu', this.props);
            this.setState({loading: true});
            setupCharts.call(this);
        }
    }

    render() {
        if (!this.state.loading) {
            console.log(this.state);
            let tagData = this.state.tagData;
            let voteData = this.state.voteData;
            return (
                <div>
                    <PieChart width={400} height={200}>
                        <Pie animationDuration={800} data={tagData} cx={'25%'} cy={'25%'} outerRadius={50}
                             fill='black' dataKey='value' nameKey='name' labelLine={false}
                             label={renderCustomizedLabel}>
                            {
                                tagData.map((entry, index) => <Cell key={`cell-${index}`} fill='rgb(0, 146, 69)'/>)
                            }
                        </Pie>
                        <Pie animationDuration={800} data={voteData} cx={'50%'} cy={'50%'} outerRadius={50}
                             fill='black' dataKey='value' nameKey='name' labelLine={false}
                             label={renderCustomizedLabel}>
                            {
                                voteData.map((entry, index) => <Cell key={`cell-${index}`} fill='rgb(0, 146, 69)'/>)
                            }
                        </Pie>
                    </PieChart>
                </div>
            );
        } else {
            return (<> Loading data... </>);
        }
    }
}

export default VisualizationCharts;
