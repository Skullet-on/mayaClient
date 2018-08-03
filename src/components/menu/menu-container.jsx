import React, {Component} from 'react';
import './menu-container.css';
import MenuItem from './menu-item';

export default class MenuContainer extends Component{
	constructor(props){
		super(props)
		this.state = {
			activeItem: '',
			activeItemPosition: 0,
			activeItemColor: '',
			menuItems: [
				{text: 'News'},
				{text: 'FAQ'},
			],
		}
	}

	handleClick(activeItem) {
		return e => {
			e.preventDefault()

			this.setState({
				activeItem,
				activeItemPosition: document.getElementById(activeItem).offsetTop,
				activeItemColor: window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'),
			})
		}
	}

	render(){
		const menuItems = this.state.menuItems.map(item => <MenuItem 
			key={ item.text } 
			item={ item }
			handleClick={e => this.handleClick(e)} />)
		return(
			<div className='menu-container'>
				<span className='menu-item--active' style={{ 
					top: this.state.activeItemPosition,
					backgroundColor: this.state.activeItemColor}}
				/>
				{ menuItems }
			</div>
		);
	}
}
