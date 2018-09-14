import React, {Component} from 'react';
import './old.css';

export default class Old extends Component{
	handleClick(e){
		e.stopPropagation();
		setTimeout(() => {
			window.open(this.props.url);
		}, 100);
	}

	render(){
		return (
			<div className="item">
				<div><b>Date:</b> {this.props.date.split('T')[0]}</div>
				<div><b>Version:</b> {this.props.version}</div>
				<div><b>Whats new:</b> {this.props.whatsNew.split('\n').map(item => {return <p> - {item}</p>})}</div>
				<div className="bottom"><button onClick={e => this.handleClick(e)}>download</button></div>
			</div>
		)
	}
}
