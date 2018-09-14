import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default class Footer extends Component{
	render(){
		return (
			<footer>
				<div className="company"><h3>Copyright 2011-2018 © MayaDrive team</h3></div>
				<div className="amazon"><h3>Learn more about <a href="http://aws.amazon.com/s3/">Amazon S3</a></h3></div>
				<div className="sitemap">
					<h3>Site map</h3>
					<ul>
						<li><Link to="/home">
							Home
						</Link></li>
						<li><Link to="/faq">
							FAQ
						</Link></li>
						<li><Link to="/downloads">
							Downloads
						</Link></li>
						<li><Link to="/contacts">
							Contact us
						</Link></li>
					</ul>
				</div>
			</footer>
		)
	}
}
