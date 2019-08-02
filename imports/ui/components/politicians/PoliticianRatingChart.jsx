import React, {Component} from 'react';
import {setupArrayForReCharts} from "../../functions/setupArrayForReCharts";

function setupRatingDataForChart() {
    let ratingArray = this.props.ratingArray[0].ratings;
    let ratingData = [];
    let count = [];
    ratingArray.forEach(entry => {
        setupArrayForReCharts(count, entry.rating, ratingData);
    });
    this.setState({ ratingData: ratingData });
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
            setupRatingDataForChart.call(this);
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <>
                    Loading...
                </>
            );
        } else if (this.state.ratingData.length > 0) {
            return (
                <div>

                </div>
            );
        }
    }
}

export default PoliticianRatingChart;