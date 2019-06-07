import React, {Component} from 'react';
import Button from '../button';
import './home.css';

export default class Home extends Component{
	render(){
		return (
			<div className="section1">
				<div className="logo"><img src="logo4.png" alt="logo"></img></div>
				<h1>More than Amazon S3</h1>
				<h1>More than Network drive</h1>
				<h1><Button 
					url="https://drive.google.com/uc?authuser=0&id=1Yn_rXP_MtrYiI0dXnHhBR_rYuClqDvZP&export=download"
					value="Download"
					className="button primary large"
					icon="icon.png"
				/></h1>
			</div>
		)
	}
}