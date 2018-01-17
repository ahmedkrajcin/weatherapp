import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';
import fire from '../../fire.js';
import firebase from 'firebase';
import moment from 'moment';



class RateComment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
			comment: '',
			approved:false
		};
	}

	changeRating(newRating) {
		this.setState({ 
			rating: newRating });
	}
	handleChangeComment(e) {
		this.setState({
			comment: e.target.value

		});
	}
	handleSubmit1(e) {
		e.preventDefault();

		fire.database().ref('users').push({
			email: this.props.email,
			name: this.props.name,
			rating:this.state.rating,
			comment:this.state.comment,
			time: moment().format('LLLL'),
			approved:this.state.approved

		});

	}

	render() {
		return (
			<div className="form-container">
				<StarRatings
					rating={this.state.rating}
					isSelectable={true}
					isAggregateRating={false}
					changeRating={this.changeRating.bind(this)}
					numOfStars={5}
					starWidthAndHeight={'40px'}
				/>
				<form onSubmit={this.handleSubmit1.bind(this)}  >
					<div className="form-group">
						<div className="col-sm-9">
							<input value={this.state.comment} onChange={this.handleChangeComment.bind(this)} type="text" className="form-control" placeholder="Comment" />
						</div>
						<div className="col-sm-3">
							<button className="btn" type="submit">Submit</button>
						</div>
					</div>
				</form>


			</div>
		);
	}
}

export default RateComment;
