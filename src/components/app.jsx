import React, { Component } from 'react';
import './app.css';
import Router from './router';
import Navbar from './navbar';
import Button from './button';
import CardsList from './cardsList';


class App extends Component {
	api(url, method = 'GET', body = {}){
		return fetch(url, {
			method: method,
			headers: {'Content-Type': 'application/json'},
			body: body
		}).then(response => {
			return response;
		})
	}

	render() {
		return (
			<div className="App">
				<Navbar />
				<div className="section1">
					<h1>More than Amazon S3</h1>
					<h1>More than Windows Network drive</h1>
					<h1><Button 
						url="/Download"
						value="Download"
						className="button primary large"
					/></h1>
				</div>
				<div className="section2">
					<CardsList />
				</div>
				<div className="section3"><Router api={(url, method, body) => this.api(url, method, body)} /></div>
				
			</div>
		);
	}
}

export default App;
