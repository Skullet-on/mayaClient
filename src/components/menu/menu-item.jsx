import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class MenuItem extends Component{
	render(){
		const text = this.props.item.text;
		return (
			<Link
				to={ text }
			>
				{ text.toUpperCase() }
			</Link>
		)
	}
}
