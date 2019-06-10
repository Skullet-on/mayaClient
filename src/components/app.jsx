import React, { Component } from 'react';
import './app.css';
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
				<div className="page">
					<Home />
					<Cardslist />
					<Faq />
					<Contacts />
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
