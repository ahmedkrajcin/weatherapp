import React, { Component } from 'react';
import SwitchType from '../../components/SwitchType';
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


class TodayWeather extends Component {
	_fahrenheitToCelcius = (data) => {
		return (data - 32) * 5/9
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
	_getUnitsTemp(unit){
		if(unit==='us')
		  return 'F'
		else
          return 'C'
	};
	_getUnitsWind(unit){
		if(unit==='si')
		return 'm/s'
		else
		  return 'mph'
	};

	render() {
		console.log(this.props);
		const {units} =this.props.dailyData.flags;
		let allItems = this.props.dailyData.daily.data.map((result, id) => {
			return (
				<div key={id} className="col-md-3">
					<div className="element">
						<div className="time">
							<p>
								<i className="fa fa-clock-o" aria-hidden="true" /> {moment.unix(result.time).format('dddd')}
							</p>
						</div>
						<div className="icon-container">
							<img src={this._getIcon(result.icon)} alt="Clear Day" />
						</div>
						<div className="summary">
							<p>
								{result.summary} </p><h3><span>{parseFloat(result.temperatureMin).toFixed(0)}/{parseFloat(result.temperatureMax).toFixed(0)}<sup>o</sup>{this._getUnitsTemp(units)}	</span>
							</h3>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="all-day-weather">
				<SwitchType/>
				<div className="row">
					{allItems}
				</div>
			</div>
		);
	}
}

export default TodayWeather;
