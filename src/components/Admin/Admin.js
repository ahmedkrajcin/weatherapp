import React, { Component } from 'react';
import Comment from '../Comment';
import fire from '../../fire.js';

class Admin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}; // <- set up react state
	}
    
	componentDidMount() { 
		let _this = this;
		let users = fire.database().ref('users').orderByKey().limitToLast(100);
		users.on('child_added', snapshot => {
			/* Update React state when message is added at Firebase Database */
			const users = { text: snapshot.val(), id: snapshot.key };
			this.setState({ users: [users].concat(this.state.users) });
			console.log(_this.state.users)
		});
	}

	render() {
		return (
			<div className="comments-container">
				{
					this.state.users.map(user => <Comment isAdmin={true} key={user.id} name={user.text.name} email={user.text.email} comment={user.text.comment} rating={user.text.rating} time={user.text.time} />)
				}
			</div>
		);
	}
}

export default Admin;
