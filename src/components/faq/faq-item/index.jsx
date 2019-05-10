import React, {Component} from 'react';

export default class FaqItem extends Component{
	render(){
		return <div className="item collapsed">
			<div className="question">
				<h1 className="faq-body">{this.props.faq.question}</h1>
			</div>
			<div className="answer">
				<h2 className="faq-body">{this.props.faq.answer}</h2>
			</div>
		</div>
	}
}
