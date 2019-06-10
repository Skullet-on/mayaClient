import React, {Component} from 'react';

export default class FaqItem extends Component{
	render(){
		return (
		<div className="faq_main_card_cell">
			<div className="faq_main_card_question">
				{this.props.faq.question}
			</div>
			<div className="faq_main_card_answer">
				{this.props.faq.answer}
			</div>
		</div>
		)
	}
}
