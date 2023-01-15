import { Component } from "react"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import NotFound from "./Component/NotFound";
import {Navigate, Route,Routes} from "react-router-dom";
export default class App extends Component {
  render(){
    return(
      <div className="App">
      <Routes>
      <Route path='/' element={<Navigate to="/Login"/>}/> {/*This means that when entering this site for the first time, I will be on the login page */}
      <Route path='/Login' element={<LogIn/>}/>
      <Route path='/Signup'  element={<SignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </div>
      );
  }
}