import React, {Component} from 'react';
import MenuItem from './menu-item';

export default class Menu extends Component{
	constructor(props){
		super(props)
		this.state = {
			menuItems: [
				{text: 'News'},
				{text: 'FAQ'},
			],
		}
	}

	list(){
		return this.state.menuItems.map((item, key)=> <MenuItem 
			key={ key } 
			item={ item }
		/>)
	}

	render(){
		return(
			<div>
				{ this.list() }
			</div>
		);
	}
}
