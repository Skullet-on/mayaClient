import React, {Component} from 'react';
import "./slide1.css";

export default class Slide1 extends Component{
	render(){
		return (
			<div className="slide1">
				<div className="row">
					<h1>Maps your cloud storage as a network drive</h1>
					<img src="cloud.png" />
				</div>
				<div className="row">
					<img src="storage.png" />
					<h2>So you can access your files as simple as if they were on your hard drive, or even better since Amazon S3 provides an outstanding reliability for your data!</h2>
				</div>
			</div>
		)
	}
}