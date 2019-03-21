import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Faq from '../faq';
import Home from '../home';
import Features from '../cardsList';
import Contacts from '../contacts';

export default class Router extends Component{
	render(){
		return(
			<Switch>
				<Route exact
					path="/" 
					render={() => <Home />} 
				/>
				<Route exact
					path="/home" 
					render={() => <Home />} 
				/>
				<Route exact
					path="/faq" 
					render={() => <Faq />} 
				/>
				<Route exact
					path="/features" 
					render={() => <Features />} 
				/>
				<Route exact
					path="/contacts"
					render={() => <Contacts />}
				/>
			</Switch>
		)
	}
};