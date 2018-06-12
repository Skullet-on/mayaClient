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
      .then(res => { this.handleResponse(res) })
      .catch(error => console.log('parsung failed', error))
  }

  handleResponse(res){
    const status = res.status === 200
    ? res.json().then(response => this.setState({status: response.status}))
      .catch(error => console.log('parsung failed', error))
    : this.setState({status: res.status})
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
