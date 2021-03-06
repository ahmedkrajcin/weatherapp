import React, { Component } from 'react';
import './styles/main.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodayWeather from './components/TodayWeather';
import HourlyWeather from './components/HourlyWeather';
import CurrentPlace from './components/CurrentPlace';
import axios from 'axios';
import SwitchType from './components/SwitchType';
import StandardMap from './components/StandardMap';
import Register from './components/Register';
import ReactModal from 'react-modal';
import star from './images/rate-star-button.svg';
import Comments from './components/Comments';
import Admin from './components/Admin';

const apiSecret = 'd8ab77870812de67277ae47d3e9bf83e';
const apiUrl = `https://api.darksky.net/forecast/${apiSecret}`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

			data: {
				currently: {},
				daily: {
					data: []
				},
				hourly: {
					data: []
				},
				flags: {}
			},
			active: 'daily',
			place: '',
			inputValue: 'Sarajevo',
			unitValue: 'auto',
			lat: '43.8562586',
			lon: '18.4130763',
			show: false,
			showRegisterModal: false,
			showAdmin: false
		};
		this._getWeatherInfo = this._getWeatherInfo.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this._switchToDaily = this._switchToDaily.bind(this);
		this._switchToHourly = this._switchToHourly.bind(this);
		this.handleAdmin = this.handleAdmin.bind(this);
	}


	handleSubmit(e) {
		e.preventDefault();

		this._getGeoInfo(this.state.inputValue);

		console.log(this.state.inputValue);

	}

	handleChange(e) {
		this.setState({
			inputValue: e.target.value

		});
		console.log(this.state.inputValue);
	}
	handleClick(e) {
		this.setState({
			unitValue: e.target.id
		});
		this._getWeatherInfo(this.state.lat, this.state.lon)
		//console.log(this.state.unitValue);
	}
	openRegisterModal() {
		this.setState({
			showRegisterModal: true
		});
	}

	closeRegisterModal() {
		this.setState({
			showRegisterModal: false
		});
	}

	_getBackground(type) {
		if (type === 'clear-night' || type === 'partly-cloudy-night') {
			return 'night'
		}

		else if (type === 'fog' || type === 'cloudy' || type === 'wind' || type === 'partly-cloudy-day') {
			return 'fog'
		}

		else if (type === 'clear-day') {
			return 'sun'
		}

		else if (type === 'rain') {
			return 'rain'
		}

		else if (type === 'snow' || type === 'sleet') {
			return 'snow'
		}
	};

	componentDidMount() {
		this._getGeoInfo(this.state.inputValue);
		//this._getWeatherInfo(this.state.lat, this.state.lon);
	}

	componentWillMount() {
		ReactModal.setAppElement('body')
	}
	_getGeoInfo = (cityName) => {

		const _this = this;

		axios.get('http://maps.google.com/maps/api/geocode/json?address=' + cityName + '&language=en')
			.then(function (response) {
				_this.setState({
					cityData: response.data,
					lat: response.data.results[0].geometry.location.lat,
					lon: response.data.results[0].geometry.location.lng,
					place: response.data.results[0].formatted_address
				});

				_this._getWeatherInfo(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng)

				console.log(response.data.results[0].geometry.location.lat)
			})
			.catch(function (error) {
				console.log(error);
			});

		// _this.setState({
		// 	lat: _this.state.cityData.results.geometry.location.lat,
		// 	lon: _this.state.cityData.results.geometry.location.lng
		// })
		// Trigger weather search
	};
	_getMarkerInfo = (lat, lng) => {

		const _this = this;

		axios.get('http://maps.google.com/maps/api/geocode/json?latlng=' + lat + ','+lng+'&language=en')
			.then(function (response) {
				_this.setState({
					cityData: response.data,
					lat: response.data.results[0].geometry.location.lat,
					lon: response.data.results[0].geometry.location.lng,
					place: response.data.results[0].formatted_address
				});

				_this._getWeatherInfo(response.data.results[0].geometry.location.lat, response.data.results[0].geometry.location.lng)

				console.log(response.data.results[0].geometry.location.lat)
			})
			.catch(function (error) {
				console.log(error);
			});

		
	};

	_getWeatherInfo = (lat, lng) => {
		const _this = this;
		const unit = this.state.unitValue;
		axios.get(apiUrl + '/' + lat + ',' + lng + '?units=' + unit)
			.then(function (response) {
				_this.setState({
					data: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	_switchToDaily() {
		//console.log('daly')
		this.setState({
			active: 'daily'
		})
	}

	_switchToHourly() {
		this.setState({
			active: 'hourly'
		})
	}
	handleAdmin() {
		this.setState({
			showAdmin: !this.state.showAdmin
		})
	}

	render() {
		return (
			<div className={`site-container ${this._getBackground(this.state.data.currently.icon)}`}>
				<div className="inner-container">
					<div className="container">
						<Header  {...this.state}
							change={this.handleChange}
							submit={this.handleSubmit}
							handleClick={this.handleClick} />
						<CurrentPlace  {...this.state} />
						<div className="row">
							<div className="col-sm-7">
								<CurrentWeather currentWeather={this.state.data} />
							</div>
							<div className="col-sm-5">
								<div className="map-container">
									<StandardMap {...this.state} updateWeather={this._getMarkerInfo.bind(this)} />
								</div>
							</div>
						</div>

						<div className="detailed-weather">
							<SwitchType switchToDaily={this._switchToDaily} switchToHourly={this._switchToHourly} {...this.state} />
							{this.state.active === 'daily' &&
								<TodayWeather dailyData={this.state.data} />
							}

							{this.state.active === 'hourly' &&
								<HourlyWeather hourlyData={this.state.data} />
							}

						</div>

						<div className="comments">
							<div className="row">
								<div className="col-md-3">
									<h2>Comments</h2>
									{this.state.showAdmin == false &&
										<button className="btn modal-btn" onClick={() => this.openRegisterModal()}>
										<img src={star} alt="" />Rate the forecast
									</button>}
									{this.state.showAdmin == true &&
										<button className="btn modal-btn" onClick={() => window.location.reload()}>
										<img src={star} alt="" />Exit Admin
									</button>}

									
								</div>

								<div className="col-md-9">
									{this.state.showAdmin == false &&
										<Comments />}
									{this.state.showAdmin == true &&
										<Admin />}
								</div>
							</div>
						</div>

						<ReactModal
							isOpen={this.state.showRegisterModal}
							contentLabel="Minimal Modal Example"
						>
							<button className="close-modal btn" onClick={this.closeRegisterModal.bind(this)}>X</button>
							<Register handleAdmin={this.handleAdmin.bind(this)} closeModal={this.closeRegisterModal.bind(this)} />
						</ReactModal>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
