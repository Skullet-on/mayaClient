import React, { Component } from 'react';
import './app.css';
import Router from './router';
import Toolbar from './toolbar';
import Footer from './footer';

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
				<Toolbar />
				<Router api={(url, method, body) => this.api(url, method, body)} />
				<Footer />
			</div>
		);
	}
}

export default App;
