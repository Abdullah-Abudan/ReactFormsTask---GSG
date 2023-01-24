import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default class NavPages extends Component {
  render() {
    return (
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="logout-btn" onClick={this.props.Logout}>
              Logout
            </button>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home/profile">
              Profile
            </NavLink>
          </li>
          {this.props.Admin ? (
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home/userslist">
                Users List
              </NavLink>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
    );
  }
}