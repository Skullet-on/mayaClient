import React, { Component } from 'react';
import './app.css';
import Router from './router';
import Navbar from './navbar';
import Footer from './footer';
import ReactFullpage from '@fullpage/react-fullpage';
import Home from './home';
import Faq from './faq';
import Contacts from './contacts';
import Slide1 from './slide1';
import Slide2 from './slide2';
import Slide3 from './slide3';
import Slide4 from './slide4';

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
				<ReactFullpage
				    render={({ state, fullpageApi }) => {
				      return (
				        <div>
				          <div className="section" data-anchor="page1">
				            <Home />
				          </div>
				          <div className="section" data-anchor="page2">
				            <div class="slide"><Slide1 /></div>
							<div class="slide"><Slide2 /></div>
							<div class="slide"><Slide3 /></div>
							<div class="slide"><Slide4 /></div>
				          </div>
				          <div className="section" data-anchor="page3">
				            <Faq />
				          </div>
				          <div className="section" data-anchor="page4">
				            <Contacts />
				          </div>
				        </div>
				      );
				    }}
				  />
				<Navbar />
			</div>
		);
	}
}

export default App;
