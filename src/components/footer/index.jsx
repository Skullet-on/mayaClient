import React, {Component} from 'react';
import './footer.css';

export default class Footer extends Component{
	render(){
		return (
			<footer>
				<div className="company"><h3>Copyright 2011-{(new Date().getFullYear())} © MayaDrive team</h3></div>
				<div className="amazon"><h3>Learn more about <a href="http://aws.amazon.com/s3/">Amazon S3</a></h3></div>
			</footer>
		)
	}
}
