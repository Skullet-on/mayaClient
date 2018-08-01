import React, { Component } from 'react';
import FaqItem from '../faq-item/faq-item';

class FaqList extends Component {
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
		this.props.api('/api/faq', 'GET')
			.then(res => res.json())
			.then(faqs => this.setState({ faqList: faqs }))
			.catch(err => console.error(err.message))
	}
	
	list(){
		return this.state.faqList.map((faq) => 
			<FaqItem key={faq.id} faq={faq} />
		)
	}

	render() {
		return (
			<div>
				{ this.list() }
			</div>
		);
	}
}

export default FaqList;
