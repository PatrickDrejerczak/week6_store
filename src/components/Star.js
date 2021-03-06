import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 5,
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2>Rating: {rating}</h2>
        <StarRatingComponent
          name="rate1"
          starCount={10}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}

export default Star;
