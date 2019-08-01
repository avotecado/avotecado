import React, {Component} from 'react';

function calculateRating(ratingArray) {
    let ratingArrayLength = ratingArray.ratings.length;
    if (ratingArrayLength > 0) {
        let acc = 0;
        for (let i = ratingArrayLength; i-- > 0;) {
            acc += ratingArray.ratings[i].rating
        }
        return (acc / ratingArrayLength).toFixed(2);
    } else {
        return 'No Rating Yet';
    }
}

function getRatings(that) {
    let ratingArray = that.props.ratingArray[0];
    let result = calculateRating(ratingArray);
    that.setState({rating: result});
}


class PoliticianRatingDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            politician: null,
            userRating: 'Select a Number',
            rating: 0
        }
    }

    componentDidMount() {
        let that = this;
        getRatings.call(this, that);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            let that = this;
            getRatings.call(this, that);
        }
    }

    render() {
        return (
            <div>
                Average: {this.state.rating} out of 5
            </div>
        );
    }
}

export default PoliticianRatingDisplay;