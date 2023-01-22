import { Component } from "react";
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import NotFound from "./Component/NotFound";
import {Navigate,Route,Routes} from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";
export default class App extends Component{
  state={
    isAuthorized: false,
  }
  login=()=>{
    this.setState({isAuthorized:true})
  }
  render(){ 

  return(
    <div className="App">
    <Routes>
    <Route path='/' element={<Navigate to="/Login"/>}/> {/*This means that when entering this site for the first time, I will be on the login page */}
    <Route path='/Login' element={<LogIn login={this.login}/>}/>
    <Route path='/Signup'  element={<SignUp/>}/>
    <Route path='/Home' element={<ProtectedRoute isAuthorized={this.state.isAuthorized}/>}>
    <Route index element={<Home/>}></Route>
    </Route>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
    </div>
    )}; 
  }
