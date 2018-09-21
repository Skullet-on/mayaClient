import React, {Component} from 'react';
import './contacts.css';

export default class Contacts extends Component{
	render(){
		return(
			<div className="container">
				<div className="form">
					<form>
						<span>Email</span>
						<input type="email" placeholder="Email"/>
						<span>Name</span>
						<input type="text" placeholder="Name"/>
						<span>Subject</span>
						<input type="text" placeholder="Subject"/>
						<span>Message</span>
						<textarea placeholder="Message"></textarea>
						<button className="button default no-border">Send</button>
					</form>
				</div>
			</div>
		)
	}
}
