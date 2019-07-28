import React, {Component} from 'react';
import {PieChart, Pie, Sector, Cell, Text} from 'recharts';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index, name}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <Text style={{fontFamily: 'Fact-ExpandedMedium', backgroundColor: 'black'}} width='1em' x={x} y={y} fill='white'
              textAnchor='middle' dominantBaseline='central' scaleToFit angle='90'>
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
    console.log(count);
    console.log(data);
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
        let dataToAggregate = this.props.selectedForDataViz;
        let count = [];
        let tagData = this.state.tagData;
        let voteData = this.state.voteData;
        // works for tags/votes -- need to change 'entry.tags', and anything else in an array i guess
        dataToAggregate.forEach(entry => {
            entry.tags.forEach(value => {
                getData(count, value, tagData);
            });
            entry.votes.forEach(value => {
                getData(count, value, voteData);
            });
        });
        this.setState({loading: false, tagData: tagData, voteData: voteData});
    }

    componentDidUpdate(prevProps, prevState) {

    }

    render() {
        if (!this.state.loading) {
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
