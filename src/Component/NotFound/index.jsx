import React, { Component } from "react";
import "./style.css"
export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <h1 className="not-found-heading">404 Not Found</h1>
        <p className="not-found-text">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    );
  }
}
