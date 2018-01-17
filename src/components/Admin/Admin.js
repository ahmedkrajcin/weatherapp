

import React, { Component } from 'react';
import fire from '../../fire.js';
import firebase from 'firebase';
import moment from 'moment';



class Admin extends Component {
	constructor(props) {
		super(props);
		
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
				
				


			</div>
		);
	}
}

export default Admin;
