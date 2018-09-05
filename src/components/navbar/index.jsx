import React, {Component} from 'react';
import Menu from "../menu";
import './style.css';

export default class Navbar extends Component{
	render(){
		return (
			<header className="header">
				<a href="/home"><img src="logo3.png" alt="logo"></img></a>
				<Menu />
			</header>
		)
	}
}
