import React, {Component} from 'react';

export default class FaqItem extends Component{
	render(){
		const { question, answer } = this.props.faq
		return(
			<div>
				<b>Question: </b>{question} 
				<b>Answer: </b>{answer}
			</div>
		);
	}
}
