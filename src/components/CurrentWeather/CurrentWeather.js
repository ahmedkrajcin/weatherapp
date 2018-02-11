import React, { Component } from 'react';
import moment from 'moment';
import clearDay from '../../images/clear-day.png';
import clearNight from '../../images/clear-night.png';
import cloudy from '../../images/cloudy.png';
import fog from '../../images/fog.png';
import partlyCloudyDay from '../../images/partly-cloudy-day.png';
import partlyCloudyNight from '../../images/partly-cloudy-night.png';
import rain from '../../images/rain.png';
import sleet from '../../images/sleet.png';
import snow from '../../images/snow.png';
import wind from '../../images/wind.png';


class CurrentWeather extends Component {

	_fahrenheitToCelcius = (data) => {
		return (data - 32) * 5 / 9
	};

	_getIcon(type) {
		if (type === 'clear-day') {
			return clearDay
		}

		else if (type === 'fog') {
			return fog
		}

		else if (type === 'clear-night') {
			return clearNight
		}

		else if (type === 'rain') {
			return rain
		}

		else if (type === 'snow') {
			return snow
		}

		else if (type === 'sleet') {
			return sleet
		}

		else if (type === 'wind') {
			return wind
		}

		else if (type === 'fog') {
			return fog
		}

		else if (type === 'cloudy') {
			return cloudy
		}

		else if (type === 'partly-cloudy-day') {
			return partlyCloudyDay
		}
		else if (type === 'partly-cloudy-night') {
			return partlyCloudyNight
		}
	};
	_getUnitsTemp(unit) {
		if (unit === 'us')
			return 'F'
		else
			return 'C'
	};
	_getUnitsWind(unit) {
		if (unit === 'si')
			return 'm/s'
		else
			return 'mph'
	};



	render() {
		const { icon, summary, temperature, apparentTemperature, humidity, windSpeed, pressure, uvIndex, precipProbability, time } = this.props.currentWeather.currently;
		const humidity1 = humidity * 100;
		const precip = precipProbability * 100;
		console.log(this.props);

		//const {summary}=this.props.currentWeather.hourly;
		const { units } = this.props.currentWeather.flags;
		return (
			<div className="current-weather">
				<div className="row">
					<div className="col-sm-5">
						<div className="icon-container">
							<img src={this._getIcon(icon)} alt="Current Weather" />
						</div>
					</div>

					<div className="col-sm-7">
						<ul>
							<li>Humidity: {humidity1}%  </li>
							<li>Wind: {windSpeed} {this._getUnitsWind(units)}</li>
							<li>Pressure: {pressure}mb</li>
							<li>UV Index: {uvIndex}</li>
							<li>Precipitation: {precip} %</li>
						</ul>

						<div className="description">
							<p className="text-left">
								<span className="larger-font">{parseFloat(temperature).toFixed(0)}<sup>o</sup>{this._getUnitsTemp(units)}</span> Real Feel {parseFloat(apparentTemperature).toFixed(0)}<sup>o</sup>{this._getUnitsTemp(units)}
							</p>
							<p className="text-left">
								{summary} </p>
						</div>

					</div>
				</div>

			</div>
		);
	}
}

export default CurrentWeather;