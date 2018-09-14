import React, {Component} from 'react';
import './downloads.css';
import Old from './old';

export default class Downloads extends Component{
	constructor(props) {
		super(props);
		this.state = {
			currentVersion: [],
			oldestVersions: [],
			isToggle: false
		}
	}
	
	componentDidMount() {
		this.getData()
	}

	getData(){
		fetch('/api/release')
			.then(res => res.json())
			.then(downloads => {
				this.setState({ 
					currentVersion: downloads[0],
					oldestVersions: downloads.slice(1)
				 })
			})
			.catch(err => console.error(err.message))
	}

	handleClick(e){
		e.stopPropagation();
		setTimeout(() => {
			window.open(this.state.currentVersion.url);
		}, 100);
	}

	collapse(e){
		this.setState({
			isToggle: !this.state.isToggle
		})
	}

	list(){
		return this.state.oldestVersions.map((item, index) => 
			<Old 
				key={ index } 
				url={ item.url }
				version={ item.version }
				date={ item.date }
				whatsNew={ item.whatsnew }
			/>)
	}

	renderToggle() {
		return <div className="oldest">
			<div className="toggle" onClick={e => this.collapse(e)}>Download oldest version</div>
		</div>
	}

	renderCollapsed() {
		return <div className="oldest">
			<div className="toggle" onClick={e => this.collapse(e)}>Download oldest version</div>
			<div className="collapse">
				{ this.list() }
			</div>
		</div>
	}

	render(){
		return (
			<div className="container">
				<div className="current">
					<h1>Download MayaDrive</h1>
					<button className="button large primary" onClick={e => this.handleClick(e)}>Download now!</button>
					<div className="info">for Microsoft Windows 7, Windows 8/8.1 and Windows 10 ( x86 and x64 )</div>
				</div>
					{this.state.isToggle ? this.renderCollapsed() : this.renderToggle()}
			</div>
		)
	}
}
