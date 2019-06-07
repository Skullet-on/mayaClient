import React, {Component} from 'react';
import Card from './card';

export default class CardsList extends Component{
	constructor(props){
		super(props)
		this.state = {
			cardsList: [
				{
					img: "img1.png",
					title: "Maps your cloud storage as a network drive",
					text: "So you can access your files as simple as if they were on your hard drive, or even better since Amazon S3 provides an outstanding reliability for your data!",
					className: "item normal"
				},
				{
					img: "img2.png",
					title: "Can work with or without GUI",
					text: "Running a server? Don't need a GUI?.. MayaDrive is fully compatible with standard Windows interfaces and 'net' application!",
					className: "item reverse"
				},
				{
					img: "img3.png",
					title: "Extremely fast",
					text: "MayaDrive is implemented entirely as a kernel-mode driver. Forget about slow services and endless data exchange between local components!",
					className: "item normal"
				},
				{
					img: "img4.png",
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
			<div className="cards">
				<h1>Features</h1>
				<div className="features-container">
					{ this.list() }
				</div>
			</div>
		);
	}
}
