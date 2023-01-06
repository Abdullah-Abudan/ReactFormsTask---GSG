import { Component } from "react";
import "./style.css";

// img
import logoGame from "../../Images/logoGame.svg";
import like from "../../Images/likeGame.svg";
import settings from "../../Images/settingsGame.svg";
import puzzle from "../../Images/puzzleGame.svg";
import sun from "../../Images/sunGame.svg"
import moon from "../../Images/moonGame.svg"
export default class NavHome extends Component{
    render(){
        return(
            <div className="container-NavHome">
                <div >
                <img src={logoGame} alt="Logo" />
                </div>

                <div className="icon">
                <div>
                    <img src={like} alt="like" />
                </div>
                <div>
                    <img src={settings} alt="settings" />
                </div>
                <div>
                    <img src={puzzle} alt="puzzle" />
                </div>                    
                </div>

                <div className="moon-sun">
                    <img src={sun} alt="sun" />                
                    <img src={moon} alt="moon" />                
                </div>
            </div>
        )
    }
}
