import React, {Component} from 'react';

export default class NewsItem extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const news = this.props.news
    return(
      <div>
        <h3 className="mb-1"><b>title: </b>{ news.title }</h3>
        <h5 className="mb-1"><i>Text: </i> { news.text }</h5>
      </div>
    );
  }
}
