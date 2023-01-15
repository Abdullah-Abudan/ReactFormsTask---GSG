import React, { Component } from "react";
import NavHome from "../Component/NavHome";
import SectionHome from "../Component/SectionHome";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { darkMode: false };
      }
    
      toggleDarkMode = () => {
        this.setState({ darkMode: !this.state.darkMode });
      }
    render(){
        let theme = this.state.darkMode ? "dark" : "light";
        return(
        <div className={`container-home ${theme}`}>
        <NavHome toggleDarkMode={this.toggleDarkMode}/>
        <SectionHome color={theme}/>
        </div>
        )
    }
  }