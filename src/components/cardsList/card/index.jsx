import React, {Component} from 'react';
import './card.css';

export default class Card extends Component{
	render(){
		return (
			<div className={this.props.className}>
				<div className="cardImage">
					<img src={this.props.img} alt=""/>
				</div>
				<div className="cardContent">
					<h1>{this.props.title}</h1>
					<h2>{this.props.text}</h2>
				</div>
			</div>
		)
	}
}
