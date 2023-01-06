import { Component } from "react";
import "./style.css";
import Header from"./Header";
import Gamming from "./Gamming";
import LastPlayed from "./LastPlayed";
import RecentTrophy from "./RecentTrophy";
import Friends from "./Friends";
class SectionHome extends Component{
    render(){
        return(
            <div className="container-SectionHome">
                <Header p="Welcome back," span="Jenny!"/>
                <Gamming/>
                <div className="flex-sec">
                <LastPlayed width="36.33%"/>
                <RecentTrophy width="36.33%"/>
                <Friends width="28%"/>                    
                </div>
            </div>
        )
    }
}
export default SectionHome;