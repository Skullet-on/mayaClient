import React, { Component } from 'react';
import './tooltip.css';

export default class Tooltip extends Component{
    render(){
        return (
        <div id="tooltip" class="top">
            <div class="tooltip-arrow" />
            <div class="tooltip-label">ToolTip Component</div>
        </div>)
    }
}
