import { Component } from "react"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
export default class App extends Component {
  render(){
    return(
      <div className="App">
      <SignUp/>
      </div>
      );
  }
}