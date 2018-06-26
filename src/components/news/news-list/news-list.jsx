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
			.then(res => { this.handleResponse(res) })
			.catch(error => console.warn('parsing failed', error))
	}

	handleResponse(res) {
		res.status === 200
			? this.handleSuccess(res)
			: this.handleError(res)
	}

	handleSuccess(res) {
		res.json().then(response => this.setState({
			newsList: response
		}))
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
				{
					this.state.status
				}
			</div>
		);
	}
}

export default NewsList;
