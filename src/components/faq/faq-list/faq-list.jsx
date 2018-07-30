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
		this.fetchData();
	}

	fetchData(){
		fetch('/api/faq')
			.then(res => { 
				res.status === 200
					? this.handleSuccess(res)
					: this.handleError(res) 
			})
			.catch(error => console.warn('parsing failed', error))
	} 

	handleSuccess(res) {
		res.json()
			.then(response => this.setState({
				faqList: response
			}))
			.catch(error => console.warn(error))
	}

	handleError(res) {
		console.warn(res.status)
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
