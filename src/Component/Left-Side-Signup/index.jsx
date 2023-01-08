import { Component } from "react";
import "./style.css"
import Opacity from "../Opacity/index"
import Container from "../Container"
import LeftSide from "../LeftSideCommon";
    // import img
import gamerLogo from "../../Images/gamerLeftSignUp.svg"  
import quotes from "../../Images/quotesLeftSignup.svg" 
import endquotes from "../../Images/endquotesLeftSignup.svg" 
import arrow from "../../Images/arrowLeftSignup.svg"
export default class LSSignUp extends Component {
    render(){
        return(
            <Opacity>
                <Container>
                   <div className="gamerLogo"> <img  src={gamerLogo} alt={"gamer"}/></div>        
                   <div className="arrow-img"> <img src={arrow} alt="" /></div>
                   <LeftSide color="white" image={quotes} quotes_p="I always observe the people who pass by when I ride an escalator.
                     I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
                      name="Hideo Kojima" endquotes={endquotes}  />   
                                        
                </Container>
            </Opacity>
        )
    }
}