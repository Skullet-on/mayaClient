import React, {Component} from 'react';
import Button from '../button';
import './home.css';

export default class Home extends Component{
	render(){
		return (
			<div className="content">
				<div className="container">
					<h1>More than Amazon S3</h1>
					<h1>More than Windows Network drive</h1>
					<h1><Button 
						url="https://drive.google.com/uc?authuser=0&id=1Yn_rXP_MtrYiI0dXnHhBR_rYuClqDvZP&export=download"
						value="Download"
						className="button primary large"
					/></h1>
				</div>
			</div>
		)
	}
}