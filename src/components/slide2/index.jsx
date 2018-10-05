import React, {Component} from 'react';

export default class Slide2 extends Component{
	render(){
		return (
			<div className="slide1">
				<div className="row">
					<img src="bash.png" />
					<h1>Can work with or without GUI</h1>
				</div>
				<div className="row">
					<h2>Running a server? Don't need a GUI?.. MayaDrive is fully compatible with standard Windows interfaces and "net" application!</h2>
					<img src="gui.png" />
				</div>
			</div>
		)
	}
}