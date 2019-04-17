import React, {Component} from 'react';
import './contacts.css';
import { FormErrors } from './formErrors';

export default class Contacts extends Component{
	constructor(props) {
		super(props)
		this.state = {
			email:			'',
			name:			'',
			subject:		'',
			message:		'',
			formErrors: {email: '', name: '', subject: '', message: ''},
			emailValid:		false,
			nameValid:		false,
			subjectValid:	false,
			messageValid:	false
		}
	}
	handleSubmit(event) {
		event.preventDefault()
		const data = {
			email: this.state.email,
			name: this.state.name,
			subject: this.state.subject,
			message: this.state.message
		}
		fetch('/api/statistic/sendmail/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(msg => console.log(msg))
			.catch(err => console.error(err))
		console.log("ok");
		
	}
	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({[name]: value},
					() => { this.validateField(name, value) });
	}
	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let emailValid = this.state.emailValid;
		let nameValid = this.state.nameValid;
		let subjectValid = this.state.subjectValid;
		let messageValid = this.state.messageValid;
	
		switch(fieldName) {
		  case 'email':
				emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				fieldValidationErrors.email = emailValid ? '' : ' is invalid';
				break;
		  case 'name':
		  	nameValid = value.length >= 6;
				fieldValidationErrors.name = nameValid ? '': ' is too short';
				break;
		  case 'subject':
		    subjectValid = value.length >= 6;
				fieldValidationErrors.subject = subjectValid ? '': ' is too short';
				break;
		  case 'message':
		    messageValid = value.length >= 6;
				fieldValidationErrors.message = messageValid ? '': ' is too short';
				break;
		  default:
				break;
		}
		this.setState({formErrors: fieldValidationErrors,
						emailValid: emailValid,
						nameValid: nameValid,
						subjectValid: subjectValid,
						messageValid: messageValid
					  }, this.validateForm);
	}
	validateForm() {
		this.setState({formValid: this.state.emailValid && this.state.nameValid && this.state.subjectValid && this.state.messageValid});
	}
	
	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}
	render(){
		return(
			<div className="container">
				<FormErrors formErrors={this.state.formErrors} />
				<div className="form">
					<form onSubmit={e => this.handleSubmit(e)} method="POST">
						<div className="form-item">
							<h2>Email</h2>
							<input 
								onChange={e => this.handleChange(e)}
								value={this.state.email} 
								placeholder='Email' 
								name='email' />
						</div>
						<div className="form-item">
							<h2>Name</h2>
							<input 
								onChange={e => this.handleChange(e)}
								value={this.state.name} 
								placeholder='Name' 
								name='name'/>
						</div>
						<div className="form-item">
							<h2>Subject</h2>
							<input 
								onChange={e => this.handleChange(e)}
								value={this.state.subject} 
								placeholder='Subject' 
								name='subject'/>
						</div>
						<div className="form-item">
							<h2>Message</h2>
							<textarea 
								onChange={e => this.handleChange(e)}
								value={this.state.message} 
								placeholder='Message' 
								name='message'/>
						</div>
						<button className="button primary no-border">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}
