import React, { Component } from 'react';
import logo from '../../images/logo.png';
import SearchForm from '../SearchForm';

class Header extends Component {
	
	render() {
		return (
			<header>
				<div className="row">
					<div className="col-sm-5">
						<div className="logo">
							<h1>
								<img src={logo} alt="" />Ahmed Weather
							</h1>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="d-inline-block btn-group btn-group-sm" data-toggle="buttons">
							<label id="si" onClick={this.props.handleClick.bind(this)} className="btn btn-primary ">
								<input type="radio" name="options" ></input>
								&deg; C
      </label>
							<label id="us" onClick={this.props.handleClick} className="btn btn-primary">
								<input type="radio" name="options"></input>
								&deg; F
      </label>
						</div>
					</div>

					<div className="col-sm-5">
						<SearchForm  {...this.state}
							change={this.props.change.bind(this)}
							submit={this.props.submit.bind(this)} />
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
