import React, {Component} from 'react';
import {setupArrayForReCharts} from "../../../utils/setupArrayForReCharts";
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

function setupRatingDataForChart() {
    let ratingArray = this.props.ratingArray[0].ratings;
    let ratingData = [];
    let count = [];
    ratingArray.forEach(entry => {
        setupArrayForReCharts(count, entry.rating, ratingData);
    });
    ratingData.sort((a, b) => {
        return (a.name - b.name)
    });
    this.setState({loading: false, ratingData: ratingData});
}

class PoliticianRatingChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            ratingData: []
        }
    }

    componentDidMount() {
        setupRatingDataForChart.call(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState({loading: true});
            setupRatingDataForChart.call(this);
        }
    }

    render() {
        if (this.state.loading) {
            return ( <> Loading... </> );
        } else {
            if (this.state.ratingData.length === 0) {
                return ( <> No ratings yet. </> );
            }
            else {
                return (
                    <>
                        <BarChart width={300} height={150} maxBarSize={13}
                                  data={this.state.ratingData}>
                            <CartesianGrid strokeDasharray='5 5'/>
                            <XAxis dataKey='name'/>
                            <YAxis label={{ value: 'Index', angle: -90 }} />
                            <Tooltip/>
                            <Legend/>
                            <Bar name='Amount of Given Rating'
                                 dataKey='value' fill='rgb(0, 146, 69)'/>
                        </BarChart>
                    </>
                );
            }
        }
    }
}

export default PoliticianRatingChart;