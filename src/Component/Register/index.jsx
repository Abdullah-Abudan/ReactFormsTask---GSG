import { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <Link to="/Signup">
        <div
          style={{
            textDecoration: "none",
            display: "inline-block",
            color: "#1565D8",
            cursor: "pointer",
          }}
        >
          Register
        </div>
      </Link>
    );
  }
}
