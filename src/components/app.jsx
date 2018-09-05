import React, { Component } from 'react';
import './app.css';
import Router from './router';
import Navbar from './navbar';


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
				<Router api={(url, method, body) => this.api(url, method, body)} />
			</div>
		);
	}
}

export default App;
