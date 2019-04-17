import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DrawerToggleButton from './drawerToggleButton';
import './toolbar.css';

export default class Toolbar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			className: "toolbar static",
			isToggle: false
		};
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		const isTop = window.scrollY;
		if (isTop > 100) return this.setState({
			className: "toolbar fixed"
		})
		return this.setState({
			className: "toolbar static"
		})
	}
	drawerClickHandler = () => {
		this.setState({
			isToggle: !this.state.isToggle
		})
	}
	render(){
		let backdrop;
        if (this.state.isToggle) {
			backdrop = <div className="toolbar_column"><ul>
			<li><Link to="/features">Features</Link></li>
			<li><Link to="/faq">Faq</Link></li>
			<li><Link to="/contacts">Contacts</Link></li>
		</ul></div>
		}
		return (
		<header className={this.state.className}>
			<nav className={this.state.toggled}>
				<div className="toolbar_row">
					<div className="toolbar_logo"><Link to="/home"><img src="logo3.png" alt="logo"></img></Link></div>
					<div className="spacer" />
					<div className="toolbar_navigation-items">
						<ul>
							<li><Link to="/features">Features</Link></li>
							<li><Link to="/faq">Faq</Link></li>
							<li><Link to="/contacts">Contacts</Link></li>
						</ul>
					</div>
					<div className="toolbar_toggle-button">
						<DrawerToggleButton click={this.drawerClickHandler} />
					</div>
				</div>
				{ backdrop }
			</nav>
		</header>
		)
	}
}
