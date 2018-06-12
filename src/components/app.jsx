import React, { Component } from 'react';
import './app.css';
import Status from './status/status';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Status />
      </div>
    );
  }
}

export default App;
