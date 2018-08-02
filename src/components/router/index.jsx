import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NewsList from '../news/news-list/news-list';

export default () => (
	<BrowserRouter>
		<div>
			<Route path="/news" component={NewsList} />
		</div>
	</BrowserRouter>
);