import React, {Component} from 'react';
import FaqItem from './faq-item';
import './faq.css';

export default class Faq extends Component{
	constructor(props) {
		super(props);
		this.state = {
			faqList: [],
			active: 0
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

	updateActive = (value) => {
		this.setState({active: value})
	}

	list(){
		let list = this.state.faqList.map((faq, item) =>{ 
			if (item === this.state.active) {
				return <FaqItem key={item} id={item} faq={faq} isActive={true} updateActive={this.updateActive} />
			} else {
				return <FaqItem key={item} id={item} faq={faq} isActive={false} updateActive={this.updateActive} />
			}
		})
		return list;
	}

	render(){
		return(
			<div className="container">
				<div className="faq-container">
					{ this.list() }
				</div>
			</div>
		);
	}
}
