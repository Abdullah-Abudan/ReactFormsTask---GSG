import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {BaseUrl} from "../Component/BaseUrl/index";
import Container from "../Component/Container";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state =
         { 
            name: "",
            email: "",
            admin: "",
            isLoading: true,
         };
      }

      async componentDidMount() {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BaseUrl}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    
        this.setState({
          name: res.data.name,
          email: res.data.email,
          admin: res.data.isAdmin,
          isLoading: false,
        });
      }
    
      render() {
        return (
          <Container>
            <div className="profile">
            <h1 style={{paddingBottom:"20px"}}>My Profile is:</h1>
            {this.state.isLoading ? (
              "Loading..."
            ) : (
              <div style={{fontSize: '20px'}}>
                <p style={{marginBottom: '10px'}}>Name: {this.state.name}</p>
                <p>Email: {this.state.email}</p>
              </div>
            )}             
            </div>
            </Container>          
        );
      }
    }