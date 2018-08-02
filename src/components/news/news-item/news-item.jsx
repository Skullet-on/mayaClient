import React, {Component} from 'react';

export default class NewsItem extends Component{
  render(){
    const { title, text } = this.props.news
    return(
      <div>
        <h3><b>title: </b>{ title }</h3>
        <h5><i>Text: </i>{ text }</h5>
      </div>
    );
  }
}
