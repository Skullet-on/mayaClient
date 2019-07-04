import React, {Component} from 'react';
import FaqItem from './faq-item';
import './faq.css';

export default class Faq extends Component{
	constructor(props) {
		super(props);
		this.state = {
			faqList: []
		}
	}
	
	componentDidMount() {
		this.getData()
	}

	getData(){
		fetch('/api/faq')
			.then(res => res.json())
			.then(faqs => this.setState({ faqList: faqs }))
			.catch(err => console.error(err.message))
	}

	list(){
		let list = this.state.faqList.map((faq, item) =>{ 
			return <FaqItem key={item} id={item} faq={faq} isActive={true} />
		})
		return list;
	}

	render(){
		return(
			<div className="faq_main_body">
				<h3 className="faq_main_body_header">Frequently asked Questions</h3>
				<div className="faq_main_cards clearfix">
					{ this.list() }
				</div>
			</div>
		);
	}
}
