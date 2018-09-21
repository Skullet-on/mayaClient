import React, {Component} from 'react';

export default class FaqItem extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isToggle: false
		}
	}

	handleClick(e) {
		this.setState({
			isToggle: !this.state.isToggle
		})
	}

	renderToggle() {
		return <div className="item">
			<div onClick={(e) => this.handleClick(e)} className="question"><h1>Q. {this.props.faq.question}</h1><h1>+</h1></div>
		</div>
	}

	renderCollapsed() {
		return <div className="item">
			<div onClick={(e) => this.handleClick(e)} className="question"><h1>Q. {this.props.faq.question}</h1><h1>-</h1></div>
			<div className="answer"><h2>A. {this.props.faq.answer}</h2></div>
		</div>
	}

	render(){
		return(
			this.state.isToggle ? this.renderCollapsed() : this.renderToggle()
		);
	}
}
