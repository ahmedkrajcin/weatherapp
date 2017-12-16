import React, { Component } from 'react';

class SwitchType extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="navigation">
				<div className="btn-group">
					<label onClick={this.props.switchToDaily.bind(this)} className={`btn btn-success ${this.props.active === 'daily' ? 'active' : ''}`}>Daily</label>
					<label onClick={this.props.switchToHourly.bind(this)} className={`btn btn-success ${this.props.active === 'hourly' ? 'active' : ''}`}>Hourly</label>
				</div>
			</div>
		);
	}
}

export default SwitchType;
