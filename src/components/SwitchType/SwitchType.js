import React, { Component } from 'react';

class SwitchType extends Component {
	render() {
		return (
			<div className="navigation">
				<div className="btn-group">
					<label className="btn btn-success active">Daily</label>
					<label className="btn btn-success">Hourly</label>
				</div>
			</div>
		);
	}
}

export default SwitchType;
