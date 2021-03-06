import React, {Component} from 'react';
import './menu.css';
import Button from '../button';

export default class Menu extends Component{
	constructor(props){
		super(props)
		this.state = {
			menuItems: [
				{
					url: "/faq",
					text: "FAQ"
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
