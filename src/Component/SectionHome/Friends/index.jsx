import { Component } from 'react'
import "./style.css"
import Title from '../Title';
import gameFriend from "../../../Images/friendsGame.png";

export default class Friends extends Component {
  render() {
      return (
        <div className="Friends" style={{width:this.props.width,padding:'20px'}} >
          <Title title="Friends" mb="20px"/>
          <div><img src={gameFriend} alt="Friends" /></div>
        </div>
      );
  }
}