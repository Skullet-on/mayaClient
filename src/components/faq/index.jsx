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
		return this.state.faqList.map((faq) => 
			<FaqItem key={faq.id} faq={faq} />
		)
	}

	render(){
		return(
			<div className="container">
				{ this.list() }
			</div>
		);
	}
}
