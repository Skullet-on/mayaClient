import React, { Component } from 'react';
import './app.css';
import Status from './status/status';
import FaqCreate from './faq/faq-create/faq-create';
import FaqList from './faq/faq-list/faq-list';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<Status />
				<FaqCreate />
				<FaqList />
			</div>
		);
	}
}

export default App;
