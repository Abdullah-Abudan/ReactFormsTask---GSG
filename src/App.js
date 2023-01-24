import { Component } from "react";
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import NotFound from "./Component/NotFound";
import {Navigate,Route,Routes} from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";
import UserList from "./Pages/UserList";
import UserDetails from "./Pages/UserDetails";
import Profile from "./Pages/Profile";
export default class App extends Component{
  state={
    isAuthorized: true,
    isAdmin: false,
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) this.setState({ isAuthorized: true });
 
    const Admin = localStorage.getItem("Admin")
    if(Admin === "true") this.setState({isAdmin:true})
  }
  Login=()=>{
    this.setState({isAuthorized:true})
  }
  Admin = () => {
    this.setState({isAdmin:true})
  }
  Logout = () => {
    this.setState({ isAuthorized: false });
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    this.setState({ isAdmin: false });
  };
  render(){ 

  return(
    <div className="App">
    <Routes>
    <Route index="true" element={<Navigate to="/Login"/>}/> {/*This means that when entering this site for the first time, I will be on the login page */}
    
    <Route path='/Login' element={<LogIn Login={this.Login} Admin={this.Admin}/>}/> {/*Login props and Admin props in LogIn Page */}

    <Route path='/Signup'  element={  
        <SignUp Login={this.Login} />
  }/>
    <Route path='/Home' element={ <ProtectedRoute
      isAuthorized={this.state.isAuthorized}
      Logout={this.Logout}
      Admin={this.state.isAdmin}
    />}>
    <Route path="profile" element={<Profile />} />

  <Route
    path="userslist/:id"
    element={
      this.state.isAdmin ? <UserDetails/> : <Navigate to="/Home" />
    }
  />

  <Route
  path="userslist"
  element={
    this.state.isAdmin ? <UserList/> : <Navigate to="/Home" />
  }
/>
  </Route>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
    </div>
    )}; 
  }
