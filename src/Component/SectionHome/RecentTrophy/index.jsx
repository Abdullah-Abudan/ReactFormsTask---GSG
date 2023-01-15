import { Component } from "react";
import "./style.css";
import Title from "../Title";

// img
import trophy from "../../../Images/trophyGame.svg"
import warriorGirlGame from "../../../Images/warriorGirlGame.svg";

export default class RecentTrophy extends Component {
  render() {
    return (
      <div style={{width:this.props.width,padding:'20px',position:"relative",overflow: 'inherit'}} >
        <Title color={this.props.color} title="most recent trophy" mb="20px"/>
        <div style={{position:"relative",overflow:"hidden"}}>
          <img src={warriorGirlGame} alt="warriorGirlGame" style={{width:"100%"}} />
          <p className="descr-trophy">perfect KILL streak <br /> <span>You are in the 0.5%</span></p>
          <div className="opacity-trophy" style={{position:"absolute",bottom:"4px",left:'0',right:"0px"}}></div>
          <p className="re-descr-trophy" style={{position:"absolute",bottom:"8px",left:"22px"}}>assassin's creed odyssey <br /> <span style={{display:"flex",justifyContent:"flex-start",fontSize:'10px'}}>last played: 34 hours ago</span></p>

        </div>
        
        <div className="trophy-img" style={{position:"absolute",top:"18%",right:"5%"}}><img src={trophy} alt="trophy" /></div>  

      </div>
    );
  }
}