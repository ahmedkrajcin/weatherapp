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
		//this.Submit1 = this.Submit1.bind(this);
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
	Submit1() {
		fire.database().ref('users').push({
			email: this.props.email,
			name: this.props.name,
			rating:this.state.rating,
			comment:this.state.comment,
			time: moment().format('LLLL'),
			approved:this.state.approved
		});
		this.props.close();
		alert("You have successfully commented")
		
		
	}

	render() {
		return (
			<div className="form-container">
				<StarRatings
					rating={this.state.rating}
					starEmptyColor={'grey'}
					starRatedColor={'#c9ac06'}
					isSelectable={true}
					isAggregateRating={false}
					changeRating={this.changeRating.bind(this)}
					numOfStars={5}
					starWidthAndHeight={'30px'}

				/>
				<form className="form-horizontal">
					<div className="form-group">
						<div className="col-sm-12">
							<textarea value={this.state.comment} onChange={this.handleChangeComment.bind(this)} type="text" className="form-control" placeholder="Comment" />
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-3">
							<button className="final-submit btn btn-success" onClick={() => this.Submit1()} type="button">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default RateComment;
