import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavPages from "../NavPages";
export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? (
            <NavPages Logout={this.props.Logout} Admin={this.props.Admin} />) : (<Navigate to="/Login" />)
        }
        <Outlet />
      </div>
    );
  }
}
