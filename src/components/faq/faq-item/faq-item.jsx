import React, {Component} from 'react';

export default class FaqItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			question: this.props.faq.question,
			answer: this.props.faq.answer
		}
	}

	render(){
		return(
			<div>
				<b>Question: </b>{this.state.question} 
				<b>Answer: </b>{this.state.question}
			</div>
		);
	}
}
