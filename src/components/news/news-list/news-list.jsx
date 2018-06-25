import React, { Component } from 'react';
import NewsItem from '../news-item/news-item';

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      status: []
    };
  }
  
  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    fetch('/api/news')
      .then(res => { this.handleResponse(res) })
      .catch(error => console.log('parsing failed', error))
  }

  handleResponse(res){
    console.log(res.status);
    const status = res.status === 200
    ? res.json().then(response => this.setState({
      newsList: response, 
      status: res.status
    }))
      .catch(error => console.log('parsing failed', error))
    : this.setState({status: res.status})
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
