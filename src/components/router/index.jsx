import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsList from '../news/news-list/news-list';
import FaqList from '../faq/faq-list/faq-list';

export default class Router extends Component{
	render(){
		return(
			<Switch>
				<Route path="/news" component={NewsList} />
				<Route 
					path="/faq" 
					render={() => <FaqList api={this.props.api} />} 
				/>
			</Switch>
		)
	}
};