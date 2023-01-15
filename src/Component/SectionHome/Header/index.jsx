import { Component } from "react";
import "./style.css"
// img
import UserImg from "../../../Images/userGame.svg"
class User extends Component{
    render(){
        let color = this.props.color === "dark" ? "dark-border" : "light-border";
        return(
            <div className={`user ${color}`}>
            <p>{this.props.p}<span>{this.props.span}</span></p>
            <div>
            <img src={UserImg} alt="user" className={`${color}`} />                
            </div>
          </div>
        )
    }
}
export default User;