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
                <Header p="Welcome back," span="Jenny!" color={this.props.color}/>
                <Gamming color={this.props.color}/>
                <div className="flex-sec">
                <LastPlayed width="36.33%" color={this.props.color}/>
                <RecentTrophy width="36.33%" color={this.props.color}/>
                <Friends width="28%" color={this.props.color}/>                    
                </div>
            </div>
        )
    }
}
export default SectionHome;