import React, { Component } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { BaseUrl } from "../Component/BaseUrl/index";

export default function UserDetails() {
  const { id } = useParams();
  return <Details id={id} />;
}

class Details extends Component {
  state = {
    id: "",
    name: "",
    email: "",
    isLoading: true,
  };

  async componentDidMount() {
    const token = localStorage.getItem("token");
    console.log(token)
    try {
      const res = await axios.get(`${BaseUrl}/${this.props.id}`, { //id in the top
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({
        name: res.data.name,
        email: res.data.email,
        id: res.data._id,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
    <div className="UserDetails">
    <table>
        <thead>
            <tr>
                <th>
                  <h3>{this.state.name} Details are: </h3>
                </th>
            </tr>
        </thead>
        <tbody>
            {this.state.isLoading ? (
              <tr>
                <td>Loading...</td>
              </tr>
            ) : (
                <tr>
                    <td>ID:{this.state.id}</td>
                    <td>Name:{this.state.name}</td>                
                    <td>Email:{this.state.email}</td>                
                </tr>
            )}
        </tbody>
    </table>
    </div>
    );
  }
}