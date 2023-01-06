import { Component } from 'react'
import "./style.css"
export default class Title extends Component {
  render() {
    return (
      <h2 style={{marginTop:this.props.mt,marginBottom:this.props.mb}} className='title'>{this.props.title}</h2>
    )
  }
}