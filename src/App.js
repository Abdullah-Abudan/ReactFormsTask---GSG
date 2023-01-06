import { Component } from "react"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Home from "./Pages/Home"
import {Route,Routes} from "react-router-dom";
export default class App extends Component {
  render(){
    return(
      <div className="App">
      <Routes>
      <Route path='/Login' element={<LogIn/>}/>
      <Route path='/Signup' element={<SignUp/>}/>
      <Route path='/Home' element={<Home/>}/>
     </Routes>
    </div>
      );
  }
}