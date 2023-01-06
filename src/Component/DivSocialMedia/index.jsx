import "./style.css"
import { Component } from "react";

class SocialMedia extends Component{
    render(){
        return(
            <a href={this.props.href} target="/_blank" className="SocialMedia">{this.props.children}</a>
        )
    }
}
export default SocialMedia;