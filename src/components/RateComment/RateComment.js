import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';



class RateComment extends Component {
	constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

   changeRating(newRating) {
		this.setState({rating: newRating});
}

	render() {
		return (
			<div className="form-container">
			<StarRatings
          rating={this.state.rating}
          isSelectable={true}
          isAggregateRating={false}
          changeRating={this.changeRating.bind(this)}
		  numOfStars={ 5 }
		  starWidthAndHeight={'40px'}	
        />
				<form  >
					<div className="form-group">
						<div className="col-sm-9">
							<input   type="text" className="form-control" placeholder="Comment" />
						</div>
						<div className="col-sm-3">
							<button className="btn"  type="submit">Submit</button>
						</div>
					</div>
				</form>
                
				
			</div>
		);
	}
}

export default RateComment;
