import { Component } from "react";
import "./style.css"

export default class TextRightTop extends Component {
  render() {
    return <div>
            <p className="p-containerForm-1">{this.props.p1}</p>
            <p className="p-containerForm-2">{this.props.p2}</p>        
        </div>;
  }
}