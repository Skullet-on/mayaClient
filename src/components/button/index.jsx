import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './button.css';

export default class Button extends Component{
	static defaultProps = {
		url:      '',
		onClick:  () => {}
	};

	handleClick(e){
		e.stopPropagation();
		this.props.onClick(e);
	}

	isExternalLink(){
		const url = this.props.url;
		return url.startsWith('http') || url.startsWith('//');
	}

	renderButton(){
		return  <button
				onClick={e => this.handleClick(e)}
				className={this.props.className}>
				<img src="icon.png" alt=""/>
				{this.props.value}
			</button>
	}

	renderLink(){
		return this.isExternalLink()
		? <a href={this.props.url}
			onClick={e => this.handleClick(e)}
			className={this.props.className}>
			<img src="icon.png" alt=""/>
			{this.props.value}
		</a>
		: <Link to={this.props.url}
			onClick={e => this.handleClick(e)}
			className={this.props.className}>
			{this.props.value}
		</Link>
	}

	render(){
		return (
			this.props.url ? this.renderLink() : this.renderButton()
		)
	}
}
