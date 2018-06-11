import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData(){
    fetch('/api/status')
      .then(res => res.json())
      .then(parsedJson => this.setState(parsedJson))
      .catch(error => console.log('parsung failed', error))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          {this.state.status}
        </p>
      </div>
    );
  }
}

export default App;
