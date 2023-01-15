import { Component } from "react";
import "./style.css";
import Title from "../Title";
import Played from "../Played";
// img
import game1 from "../../../Images/oneGame.svg";
import game2 from "../../../Images/twoGame.svg";
import game3 from "../../../Images/threeGame.svg";
import game4 from "../../../Images/fourGame.svg";


export default class LastPlayed extends Component {
  render() {
    return (
      <div className="Lastplayed" style={{width:this.props.width}}>
        <Title color={this.props.color} mb="20px" title="Last played"/>
        <div className="playedFlex">
          <Played photo={game1} descr="Hogwarts Legacy 50%"/>
          <Played photo={game2} descr="God Of War: Ragnarök 72.5%" />
          <Played photo={game3} descr="Crash Bandicoot N. Sane" textAfterBreak="Trilogy 34%"/>
          <Played photo={game4} descr="Dying Light 2 Stay Human " textAfterBreak="100%"/>
        </div>
      </div>
    );
  }
}