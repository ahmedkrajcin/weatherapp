import React, { Component } from 'react';
import Comment from '../Comment';
import fire from '../../fire.js';

class Admin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users: []
		}; // <- set up react state
		this.approveComment=this.approveComment.bind(this);
		this.handleRemove=this.handleRemove.bind(this);
	}
    
	componentWillMount() { 
		const u=[];
		this.setState({
			users:u
		})
		console.log(this.state.users);
		
		
		let _this = this;
		let user = fire.database().ref('users').orderByKey();
		user.on('value', snapshot => {
			snapshot.forEach(childSnapshot => {
				const users = { text: childSnapshot.val(), key:childSnapshot.key };
				_this.setState({ users: [users].concat(_this.state.users) });
			});
			/* Update React state when message is added at Firebase Database */
			//const users = { text: snapshot.val(), key:snapshot.key, id: snapshot.exportVal() };
			//_this.setState({ users: [users].concat(_this.state.users) });
			console.log(_this.state.users)
		});
		
		//this.setState(this.state);
			//console.log(snapshot.key)
	}

	
    approveComment(id){
		const u=[];
		this.state.users.length
		this.setState({
			users:u
		})
		var ref = fire.database().ref('users');
		//fire.database.ref('users/' + id).update({approved: true});
		ref.child(id).update({ approved: true });
		
		//window.location.reload();
		//this.forceUpdate();
		
		this.componentWillMount();
        //this.render();
	}
	handleRemove(id) {
		const u=[];
		this.setState({
			users:u
		})
		console.log(this.state.users)
		 fire.database().ref('users').child(id).remove();
		// window.location.reload();
		
		this.componentWillMount();
		//this.render();
		
	}
	render() {
		return (
			<div className="comments-container">
				{
					this.state.users.map(users=> <Comment isAdmin={true} handleRemove={this.handleRemove} approveComment={this.approveComment.bind(this)} id={users.key} approved={users.text.approved} name={users.text.name} email={users.text.email} comment={users.text.comment} rating={users.text.rating} time={users.text.time} />)
				}
			</div>
		);
	}
}

export default Admin;
