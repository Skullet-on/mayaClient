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
		this.props.api('/api/faq', 'POST', JSON.stringify(data))
			.then(res => res.json())
			.then(faqs => this.setState({ faqList: faqs }))
			.catch(err => console.error(err.message))
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
