import React, { Component } from 'react';
import './app.css';
import Router from './router';
import Toolbar from './toolbar';
import Footer from './footer';
import Home from './home';
import Cardslist from './cardsList';
import Faq from './faq';
import Contacts from './contacts';

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
				<Home />
				<Cardslist />
				<Faq />
				<Contacts />
			</div>
		);
	}
}

export default App;
