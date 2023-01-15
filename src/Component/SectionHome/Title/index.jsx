import { Component } from 'react'
import "./style.css"
export default class Title extends Component {
  render() {
    let color = this.props.color === "dark" ? "dark-title" : "light-title";
    return (
      <h2 style={{marginTop:this.props.mt,marginBottom:this.props.mb}} className={`title ${color}`}> {this.props.title}</h2>
    )
  }
}