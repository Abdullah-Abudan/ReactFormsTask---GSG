import "./style.css"
import { Component } from "react";
class ContainerForm extends Component{
    render(){
        return(
            <div className="container-form">{this.props.children}</div>
        )
    }
}
export default ContainerForm;