import React, { Component } from 'react';
import axios from 'axios';

class SearchForm extends Component {
	constructor (props) {
		super(props);
		
		
    
	}

	

	
	
	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.props.submit.bind(this)} >
					<div className="form-group">
						<div className="col-sm-9">
							<input value={this.props.inputValue}
                                  onChange={this.props.change.bind(this)}  type="text" className="form-control" placeholder="Change the location" />
						</div>
						<div className="col-sm-3">
							<button className="btn"  type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchForm;
