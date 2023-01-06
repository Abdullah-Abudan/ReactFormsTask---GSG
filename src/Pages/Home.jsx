import React, { Component } from "react";
import NavHome from "../Component/NavHome";
import SectionHome from "../Component/SectionHome";

// img

export default class Home extends Component {
    render(){
        return(
            <div className="container-home">
                <NavHome/>
                <SectionHome/>
            </div>
        )
    }
  }