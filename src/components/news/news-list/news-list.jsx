import React, { Component } from 'react';
import NewsItem from '../news-item/news-item';

class NewsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newsList: []
		};
	}
	
	componentDidMount() {
		this.fetchData();
	}

	fetchData(){
		fetch('/api/news')
			.then(res => { 
				res.status === 200
					? this.handleSuccess(res)
					: this.handleError(res) 
			})
			.catch(error => console.warn('parsing failed', error))
	} 

	handleSuccess(res) {
		res.json()
			.then(response => this.setState({
				newsList: response
			}))
			.catch(error => console.warn(error))
	}

	handleError(res) {
		console.warn(res.status)
	}

	render() {
		return (
			<div>
				{
					this.state.newsList.map((news) => 
						<NewsItem key={news.id} news={news} />
					)
				}
			</div>
		);
	}
}

export default NewsList;
