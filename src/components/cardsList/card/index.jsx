import React, {Component} from 'react';
import './card.css';

export default class Card extends Component{
	render(){
		return (
			<div className={this.props.className}>
				<img src={this.props.img} alt=""/>
				<div>
					<h1>{this.props.title}</h1>
					<h2>{this.props.text}</h2>
				</div>
			</div>
		)
	}
}
