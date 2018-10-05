import React, {Component} from 'react';
import './contacts.css';

export default class Contacts extends Component{
	render(){
		return(
			<div className="section3">	
				<div className="left"><h1>If you need our helps</h1><h1>or</h1><h1>you have a question</h1><h1>send message from us</h1></div>
				<span className="separator"></span>
				<div className="right">
					<span>Email</span>
					<input type="email" placeholder="Email"/>
					<span>Name</span>
					<input type="text" placeholder="Name"/>
					<span>Subject</span>
					<input type="text" placeholder="Subject"/>
					<span>Message</span>
					<textarea placeholder="Message"></textarea>
					<button className="button default no-border">Send</button>
				</div>
			</div>
		)
	}
}
