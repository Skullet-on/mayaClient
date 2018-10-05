import React, {Component} from 'react';

export default class Slide3 extends Component{
	render(){
		return (
			<div className="slide1">
				<div className="row">
					<h1>Extremely fast</h1>
				</div>
				<div className="row">
					<img src="speed.png" />
					<h2>MayaDrive is implemented entirely as a kernel-mode driver. Forget about slow services and endless data exchange between local components!</h2>
				</div>
			</div>
		)
	}
}