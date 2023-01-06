import { Component } from "react";
import "./style.css";

export default class Game extends Component {
  render() {
      return (
        <div className="size-game">
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
