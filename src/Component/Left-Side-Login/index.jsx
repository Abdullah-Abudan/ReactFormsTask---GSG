import { Component } from "react";
import LeftSide from "../LeftSideCommon";
import "./style.css"
//         img
import quotes from "../../Images/quotesLeftLogIn.svg"
import gamerlogo from "../../Images/gamerLeftLogIn.svg"
import endquotes from "../../Images/endquotesLeftLogIn.svg"
export default class LSLogIn extends Component {
    render(){
        return(
          
                <div style={{width:"50%"}}>
                   <div className="gamerLogo"> <img  src={gamerlogo} alt={"gamer"}/></div>  
                   <LeftSide color="#696F79" image={quotes} quotes_p="I always observe the people who pass by when I ride an escalator.
                     I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
                      name="Hideo Kojima" endquotes={endquotes}  />  
                   </div>
          
        )
    }
}