import { Component } from "react";
import Container from "../Component/Container";
import LSSignUp from "../Component/Left-Side-Signup";
import TextRightTop from "../Component/TextRightTop"
import ContainerForm from "../Component/ContainerForm";
import { object, string, ref, boolean} from "yup";  // {object, string, ref} instead of (* as yup)
import { Link } from "react-router-dom";
//       img
import navigation from "../Images/navigationRigthSignUp.svg";
import Button from "../Component/Button";
import google from "../Images/googleRigthSignUp.svg";
import line from "../Images/linetRigthLogIn.svg";

const regularExpression =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const message = 'Password must contain at least one number, one lowercase and one uppercase letter';

const defaults = {
  email: "",
  password: "",
  passwordRepeat: "",
  isSelect: false,
};
export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    isSelect: false,
    error: "",
  };


  handleChangeInput = (event) => {
    const { value, id } = event.target;
    this.setState({ [id]: value });
  };

  checkPasswordStrength = () => {
    const password = this.state.password;
    if (password.length >= 11) {
      this.setState({
        passwordStrength: '100%',
        passwordStrengthColor: 'green',
        passwordStrengthText: 'Password is strong',
        passwordStrengthTextColor: 'green'
      });
    } else if (password.length >= 5 && password.length <= 8) {
      this.setState({
        passwordStrength: '60%',
        passwordStrengthColor: '#FFC107',
        passwordStrengthText: 'Password is not strong enough',
        passwordStrengthTextColor: '#FFC107'
      });
    } else {
      this.setState({
        passwordStrength: '20%',
        passwordStrengthColor: 'red',
        passwordStrengthText: 'Password is not strong',
        passwordStrengthTextColor: 'red'
      });
    }
  };

  checkPasswordMatching() {
    // Check if the  password matches the Repeat password
    if (this.state.password !== this.state.passwordRepeat) {
      this.setState({ error: 'Passwords do not match' });
    }  
  }

   handlePasswordChange = (event) => {
    this.setState({password:event.target.value});
    this.checkPasswordStrength();
  };

   handlePasswordRepeatChange = (event) => {
    this.setState({passwordRepeat:event.target.value});
    this.checkPasswordStrength();
  };

  handleCheckboxChange = (event) => {
    this.setState({ isSelect: event.target.checked});
  };

  schema = object().shape({
    email: string().email().required('Email is required '),
    password: string().matches(regularExpression, message).required('Password must be 8 characters or longer'), //.min(8,"password should be a minimum of 8 characters") لا داعي لها طالما موجودة الماتشز التي تحوي الريقيولر اكسبرجن الشاملة
    passwordConfirmation: string().oneOf([ref("password")], "Your passwords do not match.").required('Passwords do not match!'),
    isChecked: boolean().oneOf([true], "it's false").required('required'), 
  });

  handleSubmit = (event) => {
    event.preventDefault(); //no refresh
    this.checkPasswordMatching();
    this.schema
      .validate(
        {
          //I came with the Skima inside the Handle Submit and worked for it Validate, after giving it the values ​​of the inptus through the state
          email: this.state.email,
          password: this.state.password,
          passwordconfirmation: this.state.passwordRepeat,
          isChecked: this.state.isSelect,
        },
        { abortEarly: false }
      )
      .then(() => {
        this.setState((prevState) => ({
          dataToBeSent: {
            email: prevState.email,
            password: prevState.password,
            isSelect: prevState.isSelect,
            error: prevState.error,
          },
          ...defaults,
        }));
      })
      .catch((err) => console.log(err.errors));
  };

  render() {
    return (
      <div className="flex-side">
       <div style={{color:"white"}}></div>
        <LSSignUp />
        <Container>
          <div className="right-Side-Signup">
          <Link to="/Login">
            <div className="navigation">
              <img src={navigation} alt="navigation" />
              <span className="nav-back">Back</span>
            </div>
          </Link>
            <ContainerForm>
                <TextRightTop p1="Register Individual Account!" p2="For the purpose of gamers regulation, your details are required."/>
              <form onSubmit={this.handleSubmit} >
                <div>
                  <label htmlFor="email">Email address*</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    value={this.state.email}
                    onChange={this.handleChangeInput}
                  />
                </div>
                
                <div>
                  <label htmlFor="pass">Create password*</label>
                  <input
                    id="pass"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange }
                  />

                  <div className="base-line">
                  <div className="sub-line" style={{ width: this.state.passwordStrength, background: this.state.passwordStrengthColor }}></div>
                  </div>
                  <p className="p-password" style={{ color: this.state.passwordStrengthTextColor }}>{this.state.passwordStrengthText}</p>
                </div>

                <div>
                  <label htmlFor="rePass">Repeat password*</label>
                  <input
                    id="rePass"
                    type="password"
                    placeholder="Repeat password"
                    value={this.state.passwordRepeat}
                    onChange={this.handlePasswordRepeatChange }
                  />
                </div>
                
                <div style={{paddingTop:"10px",paddingBottom:'10px',color:"red",fontWeight:"bold"}} className="error">{this.state.error}</div>
                <div className="check-align">
                  <input
                    id="check"
                    type="checkbox"
                    checked={this.state.isSelect}
                    onChange={this.handleCheckboxChange}
                  />
                  <label htmlFor="check">I agree to terms & conditions</label>
                </div>
                <Button>Register Account</Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "16px",
                  }}
                >
                  <img src={line} alt="line" />
                  <span className="or-txt">Or</span>
                  <img src={line} alt="line" />
                </div>
                
                <Link to="/Login">
                <button
                  type="button"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="login-button"
                >
                  <img src={google} alt="google" />
                  <span style={{ paddingLeft: "20px" }}>login</span>
                </button>
                </Link>
              </form>
            </ContainerForm>
          </div>
        </Container>
      </div>
    );
  }
}
