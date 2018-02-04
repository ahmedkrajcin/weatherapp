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
		console.log(this.state.users)
		
		
		let _this = this;
		let user = fire.database().ref('users').orderByKey();
		user.once('value', snapshot => {
			snapshot.forEach(childSnapshot => {
				const user1 = { text: childSnapshot.val(), key:childSnapshot.key };
				_this.setState({ users: [user1].concat(_this.state.users) });
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
		this.setState({
			users:u
		})
		var ref = fire.database().ref('users');
		ref.child(id).update({ approved: true });
		let _this = this;
		let user = fire.database().ref('users').orderByKey();
		user.once('value', snapshot => {
			snapshot.forEach(childSnapshot => {
				const user1 = { text: childSnapshot.val(), key:childSnapshot.key };
				_this.setState({ users: [user1].concat(_this.state.users) });
			});
			/* Update React state when message is added at Firebase Database */
			//const users = { text: snapshot.val(), key:snapshot.key, id: snapshot.exportVal() };
			//_this.setState({ users: [users].concat(_this.state.users) });
			console.log(_this.state.users)
			
		});
		
		//window.location.reload();
		//this.forceUpdate();
		
		//this.componentWillMount();
        //this.render();
	}
	handleRemove(id) {
		const u=[];
		this.setState({
			users:u
		})
		console.log(this.state.users)

		 fire.database().ref('users').child(id).remove();

		 
		 let _this = this;
		 let user = fire.database().ref('users').orderByKey();
		 user.once('value', snapshot => {
			 snapshot.forEach(childSnapshot => {
				 const user1 = { text: childSnapshot.val(), key:childSnapshot.key };
				 _this.setState({ users: [user1].concat(_this.state.users) });
			 });
			 /* Update React state when message is added at Firebase Database */
			 //const users = { text: snapshot.val(), key:snapshot.key, id: snapshot.exportVal() };
			 //_this.setState({ users: [users].concat(_this.state.users) });
			 console.log(_this.state.users)
		 });
		// window.location.reload();
		
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
