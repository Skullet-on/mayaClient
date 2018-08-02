import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from './home'
import NewsList from '../components/news/news-list/news-list';

export default () => (
	<BrowserRouter>
		<div>
			<Route path="/home" component={Home} />
			<Route path="/news" component={NewsList} />
		</div>
	</BrowserRouter>
);