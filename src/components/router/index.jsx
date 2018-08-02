import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewsList from '../news/news-list/news-list';
import FaqList from '../faq/faq-list/faq-list';

export default (props) => (
	<Switch>
		<Route path="/news" component={NewsList} />
		<Route 
			exact 
			path="/faq" 
			render={() => <FaqList api={this.props.api} />} 
		/>
	</Switch>
);