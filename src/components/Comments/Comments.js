import React, { Component } from 'react';
import Comment from '../Comment';
import fire from '../../fire.js';

class Comments extends Component {

	constructor(props) {
		super(props);
		this.state = { users: [] }; // <- set up react state
	}

	componentWillMount() {
		let _this = this;
		let users = fire.database().ref('users').orderByChild("approved").equalTo(true);
		users.on('child_added', snapshot => {
			/* Update React state when message is added at Firebase Database */
			let users = { text: snapshot.val(), id: snapshot.key };
			_this.setState({ users: [users].concat(this.state.users) });
			
		});console.log(_this.state.users)
	}

	render() {
		return (
			<div className="comments-container">
				{
					this.state.users.map(user => <Comment isAdmin={false} key={user.id} name={user.text.name} email={user.text.email} comment={user.text.comment} rating={user.text.rating} time={user.text.time}/>)
				}
			</div>
		);
	}
}

export default Comments;
