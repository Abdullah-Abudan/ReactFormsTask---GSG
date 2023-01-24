import React, { Component } from "react";
import axios from "axios";
import { BaseUrl } from "../Component/BaseUrl/index";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';

export default class UserList extends Component {
  state = {
    name: "",
    Users: [],
    isLoading: true,
    isDeleting: false
  };

  async componentDidMount() {
    try {
      const name = localStorage.getItem("name");
      this.setState({ name });
      const token = localStorage.getItem("token");
      const res = await axios.get(`${BaseUrl}`, {headers: {Authorization: `Bearer ${token}`},});

      this.setState({ Users: res.data });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }
  handleDelete = async (id) => {
    const confirmDelete = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
    if (confirmDelete.value) {
      this.setState({ isDeleting: true });
      try {
        await axios.delete(`${BaseUrl}/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.setState({
          Users: this.state.Users.filter((user) => user._id !== id),
        });
        this.setState({ isDeleting: false });
      } catch (error) {
        console.log(error);
        this.setState({ isDeleting: false });
      }
    }
  };

  render() {
    return (
      <div>
        <table className="UserList">
        <thead>
          <tr>
            <th style={{fontSize:"30px",display:"block",marginBottom:"50px"}}>The Users are:</th>
          </tr>
        </thead>
        <tbody>
          {this.state.isLoading
            ? "Loading .. "
            : this.state.Users.map((user) => (
                <tr key={user._id}>
                  <td>
                    <NavLink to={`/users/${user._id}`}>{user.email}</NavLink>
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(user._id)}
                    >
                      {this.state.isDeleting ? <p>Deleting...</p> : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      </div>
    );
  }
}