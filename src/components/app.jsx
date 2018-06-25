import React, { Component } from 'react';
import './app.css';
import Status from './status/status';
import NewsList from './news/news-list/news-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Status />
        <NewsList />
      </div>
    );
  }
}

export default App;
