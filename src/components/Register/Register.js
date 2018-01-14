import React, { Component } from 'react';

class Register extends Component {
	getInitialState() {
        return { showResults: false };
    }
    onClick(){
        this.setState({ showResults: true });
    }

	

	
	
	render() {
		return (
			<div>
            
				<form  >
					<div className="form-group">
						<div className="col-sm-5">
							<input   type="text" className="form-control" placeholder="Name" />
						</div>
                        <div className="col-sm-5">
							<input  type="email" className="form-control" placeholder="Email" />
						</div>
						<div className="col-sm-2">
							<button className="btn"  type="submit">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Register;
