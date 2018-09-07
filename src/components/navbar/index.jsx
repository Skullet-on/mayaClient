import React, {Component} from 'react';
import Menu from "../menu";
import './navbar.css';

export default class Navbar extends Component{
	constructor(props) {
		super(props);
		this.state = {
			className: "header static"
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		const isTop = window.scrollY;
		if (isTop > 100) return this.setState({
			className: "header fixed"
		})
		return this.setState({
			className: "header static"
		})
	};

	render(){
		return (
			<header className={this.state.className}>
				<a href="/home"><img src="logo3.png" alt="logo"></img></a>
				<Menu />
			</header>
		)
	}
}
