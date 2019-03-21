import React, {Component} from 'react';

export default class FaqItem extends Component{
	renderToggle() {
		return <div onClick={() => this.props.updateActive(this.props.id)} className="item toggle">
			<div className="question">
				<h1 className="faq-type">Q.</h1>
				<h1 className="faq-body">{this.props.faq.question}</h1>
				<h1 className="faq-collapsed">+</h1>
			</div>
		</div>
	}

	renderCollapsed() {
		return <div onClick={() => this.props.updateActive(this.props.id)} className="item collapsed">
			<div className="question">
				<h1 className="faq-type">Q.</h1>
				<h1 className="faq-body">{this.props.faq.question}</h1>
				<h1 className="faq-collapsed">-</h1>
			</div>
			<div className="answer">
				<h2 className="faq-type">A.</h2>
				<h2 className="faq-body">{this.props.faq.answer}</h2>
			</div>
		</div>
	}

	render(){
		return(
			this.props.isActive ? this.renderCollapsed() : this.renderToggle()
		);
	}
}
