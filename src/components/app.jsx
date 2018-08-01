import React, { Component } from 'react';
import './app.css';
import Status from './status/status';
import FaqCreate from './faq/faq-create/faq-create';
import FaqList from './faq/faq-list/faq-list';

class App extends Component {
	api(url, method){
		fetch(url, {
			method: method,
			headers: {'Content-Type': 'application/json'}
		}).then(response => {
			if (response.status >= 400) {
				throw 'toaster should be shown'
			}
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
				<FaqCreate />
				<FaqList api={(method, url) => this.api(method, url)} />
			</div>
		);
	}
}

export default App;
