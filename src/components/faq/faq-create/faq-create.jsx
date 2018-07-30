import React, {Component} from 'react';

export default class FaqCreate extends Component{
	constructor(props) {
		super(props)
		this.state = {
			question: '',
			answer: '',
			msg: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		var data = {
			question: this.state.question,
			answer: this.state.answer
		}
		fetch("/api/faq", {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		}).then(response => {
			if (response.status >= 400) {
				throw new Error("Bad response from server");
			}
			return response.json();
		}).then(data => {
			console.log(data)    
			if(data == "success"){
				this.setState({msg: "Thanks for registering"});  
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
				<form onSubmit={this.handleSubmit} method="POST">
					<label>Question</label>
					<input 
						onChange={this.handleChange.bind(this)}
						value={this.state.question} 
						placeholder='Question' 
						name='question'/>
					<label>Answer</label>
					<textArea 
						onChange={this.handleChange.bind(this)}
						value={this.state.answer} 
						placeholder='Answer' 
						name='answer'/>
					<div>
						<button>Submit</button>
					</div>
				</form>
			</div>
		);
	}
}
