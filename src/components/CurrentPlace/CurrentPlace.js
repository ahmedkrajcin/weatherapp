import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
	render() {
		return (
			<div className="current-place">
				<h2>{this.props.place}         <span className="ng-binding">{moment().format('LLLL')}</span></h2>
			</div>
		);
	}
}

export default App;
