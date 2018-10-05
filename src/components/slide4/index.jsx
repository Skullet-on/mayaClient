import React, {Component} from 'react';
import "./slide4.css";

export default class Slide1 extends Component{
	render(){
		return (
			<div className="slide4">
				<div className="row">
					<h1>Uses advanced technologies</h1>
					<img src="cyber.png" />
				</div>
				<div className="row">
					<h2>Strong caching mechanism reduces the amount of network traffic thus lowering your bills! </h2>
				</div>
			</div>
		)
	}
}