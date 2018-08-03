import React, {Component} from 'react';

export default class NewsItem extends Component{
	render(){
		const { title, text } = this.props.news
		return(
			<div>
				<b>title: </b>{ title }
				<b>Text: </b>{ text }
			</div>
		);
	}
}
