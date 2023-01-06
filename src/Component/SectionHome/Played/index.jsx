import { Component } from 'react'
import "./style.css"

export default class Played extends Component {
  render() {
    return (
      <div className="played">
        <img src={this.props.photo}  alt="Last Games" />
        <div className='shadow-p' style={{height:"60px"}}>
        <p>{this.props.descr}<br/>{this.props.textAfterBreak}</p>
        
        </div>
      </div>
    );
  }
}