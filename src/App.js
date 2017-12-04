import React, { Component } from 'react';
import './styles/main.css';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import TodayWeather from './components/TodayWeather';
import CurrentPlace from './components/CurrentPlace';
import axios from 'axios';

const apiSecret = 'd8ab77870812de67277ae47d3e9bf83e';
const apiUrl = `https://api.darksky.net/forecast/${apiSecret}`;

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			data: {
				currently: {},
				daily: {
					data: []
				},
				hourly:{
				},
				flags:{}
			},
			cityData: {
				results:[
					{geometry:{
					location:{
						lat:'',
						lng:''
					}

				}

				}
			]
			},
			
			inputValue: 'Sarajevo',
			unitValue: 'auto',
			lat:'0',
			lon:'0'
		}
		this._getWeatherInfo = this._getWeatherInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
		
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
		//console.log(this.state.unitValue);
		this.componentDidMount();
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
		//this._getGeoInfo(this.state.inputValue);
		this._getWeatherInfo(this.state.lat, this.state.lon);
		console.log(this.state.unitValue);
		console.log(this.state.inputValue);
		
	}
	
	_getGeoInfo = (cityName) => {
		
		const _this = this;
		
				axios.get('http://maps.google.com/maps/api/geocode/json?address=' + cityName)
					.then(function (response) {
						_this.setState({
							cityData: response.data
						});
					})
					.catch(function (error) {
						console.log(error);
					});
					const {lat}=this.state.cityData.results.geometry.location;
					console.log(lat);
					
				_this.setState({
					lat: _this.state.cityData.results.geometry.location.lat,
					lon: _this.state.cityData.results.geometry.location.lng
				})
				console.log(this.state.cityData.results.geometry.location.latitude)
		// Trigger weather search
	};

  _getWeatherInfo = (lat, lng) => {
  	const _this = this;
		const unit=this.state.unitValue;
		axios.get(apiUrl + '/'+ lat + ',' + lng+'?units='+unit)
			.then(function (response) {
				_this.setState({
					data: response.data
				});
			})
			.catch(function (error) {
				console.log(error);
			});
  };

  render() {
    return (
      <div className={`site-container ${this._getBackground(this.state.data.currently.icon)}`}>
        <div className="inner-container">
          <div className="container">
            <Header  {...this.state}
              change={this.handleChange}
              submit={this.handleSubmit}
							handleClick={this.handleClick}/>
            <CurrentPlace  {...this.state}/>
            <CurrentWeather currentWeather={this.state.data}/>

            <div className="detailed-weather">
              <TodayWeather dailyData={this.state.data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
