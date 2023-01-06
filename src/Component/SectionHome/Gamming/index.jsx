import { Component } from "react";
import "./style.css";
import Game from "../Game";
import Title from "../Title";

// img
import godOfWars from "../../../Images/godOfWarGame.png";
import superman from "../../../Images/supermanGame.png";
import spiderman from "../../../Images/spidermanGame.png";

export default class Gamming extends Component {
  render() {
    return (
      <div style={{padding:"20px"}}>
         <Title title="NEW GAMES"  mb="20px"/>
        <div className="gamming-flex">
          <Game
            photo={godOfWars}
            descr="Join in the new DLC with Kratos to learn more about him and his
              future."
          />
          <Game
            photo={superman}
            descr="Be part of the Suicide Squad and kill the Justice League!
              "
            writer="-Amanda Waller"
          />
          <Game
            photo={spiderman}
            descr=" Miles Morales discovers powers from his mentor, Peter Parker.
              Master his unique, bio-electric venom blast attacks."
          />
        </div>
      </div>
    );
  }
}
