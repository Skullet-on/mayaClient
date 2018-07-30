import React, {Component} from 'react';

export default class FaqCreate extends Component{
	constructor(props) {
		super(props)
		this.state = {
			question: '',
			answer: '',
			message: ''
		}
	}

	handleSubmit(event) {
		event.preventDefault()
		const data = {
			question: this.state.question,
			answer: this.state.answer
		}
		fetch("/api/faq", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		}).then(response => {
			if (response.status >= 400) {
				throw new Error("Bad request");
			}
			return response.json();
		}).then(data => {
			console.log(data)    
			if(data === "success"){
				this.setState({message: "Thanks for registering"});  
			}
		}).catch(err => {
			console.log(err)
		});
	}

	handleChange(e) {
		this.setState({[e.target.name]: e.target.value});  
	}

	render(){
		return(
			<div>
				<form onSubmit={e => this.handleSubmit(e)} method="POST">
					<label>Question</label>
					<input 
						onChange={e => this.handleChange(e)}
						value={this.state.question} 
						placeholder='Question' 
						name='question'/>
					<label>Answer</label>
					<textarea 
						onChange={e => this.handleChange(e)}
						value={this.state.answer} 
						placeholder='Answer' 
						name='answer'/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
