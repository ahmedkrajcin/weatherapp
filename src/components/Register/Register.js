import React, { Component } from 'react';
import RateComment from '../RateComment';
import axios from 'axios';
import fire from '../../fire.js';
import firebase from 'firebase';


const apiSecret = 'e7c91e36c05faacb8edc3a573e2d6e8f';
const apiUrl = `https://apilayer.net/api/check?access_key=${apiSecret}&email=`;

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			emailData: '',
			show: false,
			showAlert: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChangeName(e) {
		this.setState({
			name: e.target.value

		});
	}
	handleChangeEmail(e) {
		this.setState({
			email: e.target.value

		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.getEmailInfo(this.state.email);
		//console.log(emailValid);
	}

	
	handleValidEmail() {
		const _this = this;
		
		fire.database().ref("users")
			.orderByChild("email")
			.equalTo(this.state.email)
			.on('value', function (snapshot) {
				if (snapshot.val() === null) {
					console.log('Email is not present');
					_this.setState({
						show: !_this.state.show
					})
					

				} else {
					console.log('Email is present')
					alert("You have already rated and commented")

					//Your Code goes Here
				}
			});
		
	}
	handleAlert() {
		this.setState({
			showAlert: !this.state.showAlert
		});
		alert(" The email address provided do not exists, please enter another email");
	}

	getEmailInfo = (email) => {
		const _this = this;
		axios.get(apiUrl + email)
			.then(function (response) {
				console.log(response.data);
				if (response.data.smtp_check == true) {
					_this.handleValidEmail()

				}
				else
					_this.handleAlert()


				console.log(_this.state.emailData);

			})
			.catch(function (error) {
				console.log(error);
			});
	};



	render() {
		return (
			<div className="register-from">
				<h3>Enter your details</h3>
				{!this.state.show &&
				<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)} >
					<div className="form-group">
						<div className="col-sm-12">
							<input value={this.state.name} onChange={this.handleChangeName.bind(this)} type="text" className="form-control" placeholder="Name" />
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-12">
							<input value={this.state.email} onChange={this.handleChangeEmail.bind(this)} type="email" className="form-control" placeholder="Email" />
						</div>
					</div>

					<div className="form-group">
						<div className="col-sm-12">
							<button className="btn btn-success" type="submit">Submit</button>
						</div>
					</div>
				</form>
				}


				{this.state.show && <RateComment name={this.state.name} email={this.state.email}/>}

			</div>
		);
	}
}

export default Register;
