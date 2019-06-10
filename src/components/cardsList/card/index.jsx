import React, {Component} from 'react';
import './card.css';

export default class Card extends Component{
	render(){
		let cn = "feature_main_card " + this.props.img;
		return (
			<div className="feature_main_card_cell">
				<div className="feature_main_card_wrap">
					<div className={cn}>
					</div>
					<h3 className="feature_main_card_header">{this.props.title}</h3>
					<div className="feature_main_card_lead">
						{this.props.text}
					</div>
				</div>
			</div>
		)
	}
}
