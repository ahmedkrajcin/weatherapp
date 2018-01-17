import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';


class Comment extends Component {

	render() {
		return (
			<div className="comment-element">
				{
					this.props.isAdmin &&
					<ul className="admin-controls">
						<li>
							<button className="btn btn-success">
								Approve
							</button>
						</li>

						<li>
							<button className="btn btn-danger">
								Delete
							</button>
						</li>
					</ul>
				}
				<h5 className="author">
					{this.props.name}
					{
						this.props.isAdmin &&
						<small>{this.props.email}</small>
					}
				</h5>

				<p>
					{this.props.comment}
				</p>

				<div className="rating">
					<StarRatings
						rating={this.props.rating}
						starEmptyColor={'grey'}
						starRatedColor={'#c9ac06'}
						isSelectable={false}
						isAggregateRating={false}
						numOfStars={5}
						starWidthAndHeight={'15px'}
					/>

					<small>{this.props.time}</small>
				</div>
			</div>
		);
	}
}

export default Comment;
