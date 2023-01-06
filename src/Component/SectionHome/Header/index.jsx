import { Component } from "react";
import "./style.css"
// img
import UserImg from "../../../Images/userGame.svg"
class User extends Component{
    render(){
        return(
            <div inert className="user">
            <p>{this.props.p}<span>{this.props.span}</span></p>
            <div>
            <img src={UserImg} alt="user" />                
            </div>
          </div>
        )
    }
}
export default User;