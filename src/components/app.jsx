import React, { Component } from 'react';
import './app.css';
import Status from './status/status';
import FaqCreate from './faq/faq-create/faq-create';
import FaqList from './faq/faq-list/faq-list';

class App extends Component {
	api(url, method = 'GET', body = {}){
		const handledStatuses = [200, 201, 204, 400, 401, 404];

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
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Status />
				<FaqCreate api={(url, method, body) => this.api(url, method, body)}  />
				<FaqList api={(url, method, body) => this.api(url, method, body)} />
			</div>
		);
	}
}

export default App;
