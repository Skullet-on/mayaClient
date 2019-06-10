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
		event.preventDefault();
		if(!this.state.formValid){
			console.log("nooo");
			return false;
		}
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
		console.log(this.state.formValid);
		return this.state.formValid;
	}
	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}
	render(){
		return(
			<div className="contacts_main_body">
				<h1 className="contacts_main_body_header">Still have question?</h1>
				<FormErrors formErrors={this.state.formErrors} />
				<form className="contacts_main_form" onSubmit={e => this.handleSubmit(e)} method="POST">
					<div className="contacts_main_form_item">
						<div className="contacts_main_form_item_header">Email</div>
						<div className="contacts_main_form_item_content"><input 
							onChange={e => this.handleChange(e)}
							value={this.state.email} 
							placeholder='Email' 
							name='email' /></div>
					</div>
					<div className="contacts_main_form_item">
						<div className="contacts_main_form_item_header">Name</div>
						<div className="contacts_main_form_item_content"><input 
							onChange={e => this.handleChange(e)}
							value={this.state.name} 
							placeholder='Name' 
							name='name'/></div>
					</div>
					<div className="contacts_main_form_item">
						<div className="contacts_main_form_item_header">Subject</div>
						<div className="contacts_main_form_item_content"><input 
							onChange={e => this.handleChange(e)}
							value={this.state.subject} 
							placeholder='Subject' 
							name='subject'/></div>
					</div>
					<div className="contacts_main_form_item">
						<div className="contacts_main_form_item_header">Message</div>
						<div className="contacts_main_form_item_content"><textarea 
							onChange={e => this.handleChange(e)}
							value={this.state.message} 
							placeholder='Message' 
							name='message'/></div>
					</div>
					<div className="contacts_main_form_item">
						<div></div>
						<input type="submit" className="contacts_submit" value="Submit" />
						<div></div>
					</div>
				</form>
			</div>
		)
	}
}
