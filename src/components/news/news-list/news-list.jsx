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
      .then(res => res.json())
      .then(newsList => this.setState({newsList}))
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.newsList.map((news) => 
              <NewsItem news={news} />
            )
          }
        </div>
      </div>
    );
  }
}

export default NewsList;
