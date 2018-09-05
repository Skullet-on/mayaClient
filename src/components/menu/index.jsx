import React, {Component} from 'react';
import Button from '../button';

export default class Menu extends Component{
	constructor(props){
		super(props)
		this.state = {
			menuItems: [
				{
					url: "/home",
					text: "home",
					active: true
				},
				{
					url: "/faq",
					text: "FAQ"
				},
				{
					url: "/download",
					text: "Download"
				},
				{
					url: "/contacts",
					text: "Contacts"
				}
			],
		}
	}

	list(){
		return this.state.menuItems.map((item, index) => 
			<Button 
				key={ index } 
				url={ item.url }
				value={ item.text }
				className={ item.className }
				active={ item.active }
			/>)
	}

	render(){
		return(
			<ul className="menu">
				{ this.list() }
			</ul>
		);
	}
}
