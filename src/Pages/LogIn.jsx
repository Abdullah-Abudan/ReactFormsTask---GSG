import React, { Component } from "react";
import Container from "../Component/Container";
import LSLogIn from "../Component/Left-Side-Login/index";
import TextRightTop from "../Component/TextRightTop"
import SocialMedia from "../Component/DivSocialMedia";
import Register from "../Component/Register";
// img
import google from "../Images/googleRigthLogIn.svg";
import twitter from "../Images/twitterRigthLogIn.svg";
import linkedin from "../Images/linkedinRigthLogIn.svg";
import github from "../Images/githubRightLogIn.svg";
import eye from "../Images/eyeRigthLogIn.svg";
import Button from "../Component/Button";
import line from "../Images/linetRigthLogIn.svg"

const defaults = {
  email: "",
  password: "",
};

export default class LogIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeInput = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value }); 
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      dataToBeSent: {
        email: prevState.email,
        password: prevState.password,
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
                  required
                  placeholder="Write your email"
                  value={this.state.email}
                  onChange={this.handleChangeInput}
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="password">Enter your password</label>
                <div style={{position: "relative", marginBottom: "40px"}}>
                  <input
                    type="password"
                    required
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
                <Button>Login</Button>
                <div
                  style={{
                    color: "#696F79",
                    marginTop: "20px",
                    textAlign: "center",
                  }}
                >
                 <div> Don’t have an account?{" "}<Register/></div>  {/* div inside p gives an error so I replaced p with div*/}
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    );
  }
}
