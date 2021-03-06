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


class HourlyWeather extends Component {
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

	render() {
		const {units} =this.props.hourlyData.flags;
		var size=12;
		let allItems = this.props.hourlyData.hourly.data.slice(0,size).map((result, id) => {
			return (
				<div key={id} className="col-md-2">
					<div className="element">
						<div className="time">
							<p>
								<i className="fa fa-clock-o" aria-hidden="true" /> {moment.unix(result.time).format('HH:mm')} 
							</p>
						</div>
						<div className="icon-container">
							<img src={this._getIcon(result.icon)} alt="Clear Day" />
						</div>
						<div className="summary">
							<p>
								{result.summary} </p><h3><span>{parseFloat(result.temperature).toFixed(0)}<sup>o</sup>{this._getUnitsTemp(units)}	</span>
							</h3>
						</div>
					</div>
				</div>
			);
		});

		return (
			<div className="all-day-weather">
				<div className="row">
					{allItems}
				</div>
			</div>
		);
	}
}

export default HourlyWeather;
