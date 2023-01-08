import { Component } from "react";
import "./style.css"

export default class Opacity extends Component {
  render() {
    return <div className="opacity-bg">{this.props.children}</div>;
  }
}