import { Component } from "react";
import "./style.css"


export default class LeftSide extends Component {
    render(){
        return(
            <div>
                   <div className="mid-position">
                   <div> <img  src={this.props.image} alt={"quotes"}/></div>
                    <p className="quotes-p "style={{ color: this.props.color }}>{this.props.quotes_p} </p>
                    <span className="name"style={{ color: this.props.color }}>{this.props.name}</span> 
                    <div className="endquotes"><img src={this.props.endquotes} alt="endquotes" /></div>
                    </div>            
            </div>
        )
    }
}