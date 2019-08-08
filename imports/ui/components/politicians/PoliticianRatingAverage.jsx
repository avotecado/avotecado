import React, {Component} from 'react';

function getColor(rating) {
    switch(Math.floor(rating)) {
        case 0:
        case 1:
            return '#D2222D';
        case 2:
            return '#FFBE00';
        case 3:
            return '#DBFF6E';
        case 4:
            return '#238823';
        case 5:
            return '#007000';
    }
}

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
                <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                    Average Rating:
                    <span style={{fontFamily:"Helvetica Black Extended", fontSize:"2em", color:getColor(rating)}}>
                        {rating}
                    </span>
                    out of 5
                </div>);
        } else {
            return 'No ratings to average yet.';
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
