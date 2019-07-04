import React, {Component} from 'react';
import Card from './card';

export default class CardsList extends Component{
	constructor(props){
		super(props)
		this.state = {
			cardsList: [
				{
					img: "feature_main_card_cloud",
					title: "Maps your cloud storage as a network drive",
					text: "So you can access your files as simple as if they were on your hard drive, or even better since Amazon S3 provides an outstanding reliability for your data!",
					className: "item normal"
				},
				{
					img: "feature_main_card_gui",
					title: "Can work with or without GUI",
					text: "Running a server? Don't need a GUI?.. MayaDrive is fully compatible with standard Windows interfaces and 'net' application!",
					className: "item reverse"
				},
				{
					img: "feature_main_card_speed",
					title: "Extremely fast",
					text: "MayaDrive is implemented entirely as a kernel-mode driver. Forget about slow services and endless data exchange between local components!",
					className: "item normal"
				},
				{
					img: "feature_main_card_advanced",
					title: "Uses advanced technologies",
					text: "Strong caching mechanism reduces the amount of network traffic thus lowering your bills!",
					className: "item reverse"
				}
			],
		}
	}

	list(){
		return this.state.cardsList.map((item, index) => 
			<Card 
				key={ index } 
				img={ item.img }
				title={ item.title }
				text={ item.text }
				className={ item.className }
			/>)
	}

	render(){
		return(
			<div className="feature_main_body">
				<h3 className="feature_main_body_header">Features</h3>
				<div className="feature_main_cards clearfix">
					{ this.list() }
				</div>
			</div>
		);
	}
}
