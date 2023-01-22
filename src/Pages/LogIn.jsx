import React, { Component } from "react";
import Container from "../Component/Container";
import LSLogIn from "../Component/Left-Side-Login/index";
import TextRightTop from "../Component/TextRightTop"
import SocialMedia from "../Component/DivSocialMedia";
import Register from "../Component/Register";
import { Navigate } from "react-router-dom";
import Button from "../Component/Button";
import { object, string} from "yup";  // {object, string, ref} instead of (* as yup)

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// img
import google from "../Images/googleRigthLogIn.svg";
import twitter from "../Images/twitterRigthLogIn.svg";
import linkedin from "../Images/linkedinRigthLogIn.svg";
import github from "../Images/githubRightLogIn.svg";
import eye from "../Images/eyeRigthLogIn.svg";
import line from "../Images/linetRigthLogIn.svg"

const regularExpression =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const message = 'The password is incorrect';

const defaults = {
  email: "",
  password: "",
};

export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
    error:"",
    isLoggingIn:false,
  };

  handleChangeInput = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value }); 
  };
  schema = object().shape({
    email: string().email().required('The Email is incorrect'),
    password: string().matches(regularExpression, message),
  });
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.schema
    .validate(
      {
        email: this.state.email,
        password: this.state.password,
      },
      { abortEarly: false }
    )
    .then(() => {
      NotificationManager.success("Login successful.", "Success!");
      this.setState((prevState) => ({
        dataToBeSent: {
          email: prevState.email,
          password: prevState.password,
          isLoggingIn:prevState.isLoggingIn,
        },
        ...defaults,
      }));
    })
    .catch((err) => {
      const errorMessage = err.errors.join(' & ');
      NotificationManager.error(errorMessage, "Error!",6000);
  });

    if(this.state.email === "abdullah-dan@outlook.com" && this.state.password ==="*Abd2000"){
    this.setState({isLoggingIn:true});
    this.props.login();
  }
    else
    this.setState({ error: 'login failed' });

    this.setState((prevState) => ({
      dataToBeSent: {
        email: prevState.email,
        password: prevState.password,
        isLoggingIn:prevState.isLoggingIn,
      },
      ...defaults,
    }));
  };
  
  passwordInput = React.createRef(); //  reference to pass input
  ViewPassword = () => {
    if (this.passwordInput.current.type === 'password') {
      this.passwordInput.current.setAttribute('type', 'text'); // show a text when clicking a img
    } else {
      this.passwordInput.current.setAttribute('type', 'password'); // hidden
    }
  };
  render() {
    return (
      <Container>
        <NotificationContainer/>
        <div className="flex-side">
          <LSLogIn />
          <div style={{ padding:"0 40px"}}>
            <TextRightTop p1="Join the game!" p2="Go inside the best gamers social network!"/>
            <div
              className="flex-side"
              style={{
                gap: "10px",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <SocialMedia href="https://www.google.ps/webhp?hl=en&sa=X&ved=0ahUKEwjF95j6oZn8AhVSSPEDHfNmBYMQPAgI">
                <img src={google} alt="google" />
              </SocialMedia>
              <SocialMedia href="https://twitter.com/home">
                <img src={twitter} alt="twitter" />
              </SocialMedia>
              <SocialMedia href="https://www.linkedin.com/">
                <img src={linkedin} alt="linkedin" />
              </SocialMedia>
              <SocialMedia href="https://github.com/">
                <img src={github} alt="github" />
              </SocialMedia>
            </div>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",gap:'16px'}}>
                <img src={line} alt="line" />    
                <span className="or-txt">Or</span>
                <img src={line} alt="line" /> 
            </div>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="email">Your email </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  value={this.state.email}
                  onChange={this.handleChangeInput}
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="password">Enter your password</label>
                <div style={{position: "relative"}}>
                  <input
                    type="password"
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    value={this.state.password}
                    onChange={this.handleChangeInput}
                    id="password"
                    ref={this.passwordInput}
                  />
                  <img
                    src={eye}
                    alt="eye"
                    style={{ position: "absolute", top: "30%", right: "5%",cursor:"pointer"}}
                    onClick={this.ViewPassword}
                  />
                </div>
                <div style={{paddingTop:"10px",paddingBottom:'10px',color:"red",fontWeight:"bold"}}>{this.state.error}</div>

                <Button>Login</Button>
                {this.state.isLoggingIn ? <Navigate to="/Home"/>:""}
                <div
                  style={{
                    color: "#696F79",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                 <div> Don’t have an account?{" "}<Register/></div>
                </div>
              </div>
            </form>
          </div>
        </div>     
      </Container>
    );
  }
}
