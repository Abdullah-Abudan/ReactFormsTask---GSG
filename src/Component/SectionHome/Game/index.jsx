import { Component } from "react";
import "./style.css";

export default class Game extends Component {
  render() {
    let color = this.props.color === "dark" ? "dark-border" : "light-border";
      return (
        <div className={`size-game ${color}`}>
          <img src={this.props.photo} alt="img game"/>
          <div className="div-p">
          <p>
            {this.props.descr}
            <br/>
            {this.props.writer}
          </p>            
          </div>

        </div>
      )
    }
  }
