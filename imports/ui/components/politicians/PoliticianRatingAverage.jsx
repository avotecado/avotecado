import React, {Component} from 'react';

class PoliticianRatingAverage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            politician: null,
            rating: null
        }
    }

    componentDidMount() {
        this.getRatings();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.getRatings();
        }
    }

    getRatings() {
        let ratingArray = this.props.ratingArray;
        let result = this.calculateRating(ratingArray);
        this.setState({rating: result});
    }

    calculateRating(ratingArray) {
        let ratingArrayLength = ratingArray.length;
        if (ratingArrayLength > 0) {
            let acc = 0;
            for (let i = ratingArrayLength; i-- > 0;) {
                acc += ratingArray[i].rating
            }
            let rating = (acc / ratingArrayLength).toFixed(2);
            return (
                <>
                    <strong>Average Rating:</strong> {rating} out of 5
                </>);
        } else {
            return 'No Rating Yet';
        }
    }

    render() {
        return (
            <>
                {this.state.rating}
            </>
        );
    }
}

export default PoliticianRatingAverage;
