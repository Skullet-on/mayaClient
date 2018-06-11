import React, { Component } from 'react';
import './status.css';

class Status extends Component {
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
      <div className="Status">
        <p>
          {this.state.status}
        </p>
      </div>
    );
  }
}

export default Status;