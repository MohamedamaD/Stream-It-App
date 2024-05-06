import React, { useRef, useState } from "react";
import "./Register.scss";
import { FlatButton, Input } from "../../components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const [firstName, setFName] = useState("");
  const [lastName, setLName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const __errors = useRef(null);
  const history = useHistory();
  const submitHandler = async (ev) => {
    ev.preventDefault();

    if (cpassword !== password) {
      __errors.current.innerText =
        "Please enter a password matching with your password.";
      return;
    } else {
      __errors.current.innerText = "";
    }
    const body = {
      firstName,
      lastName,
      username,
      email,
      password: password,
    };
    const res = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.status === 201) {
      // login success
      __errors.current.innerText = "";
      history.push("/login");
    } else if (res.status === 400) {
      const error = await res.json();
      __errors.current.innerText = error.message;
    }
  };
  return (
    <div className="__register">
      <div className="container __register__container">
        <form id="__register__form" onSubmit={submitHandler}>
          <h1>Create Your Account</h1>
          <div className="form-inputs">
            <div className="input-part">
              <Input
                type="text"
                id="firstName"
                labelValue="First Name"
                onchange={(ev) => {
                  setFName(ev.target.value);
                }}
              />
              <Input
                type="text"
                id="LastName"
                labelValue="Last Name"
                onchange={(ev) => {
                  setLName(ev.target.value);
                }}
              />
            </div>
            <div className="input-part">
              <Input
                type="text"
                id="userName"
                labelValue="User Name*"
                onchange={(ev) => {
                  setUserName(ev.target.value);
                }}
              />
              <Input
                type="email"
                id="email"
                labelValue="Email*"
                onchange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </div>
            <div className="input-part">
              <Input
                type="password"
                id="password"
                labelValue="Password*"
                onchange={(ev) => {
                  setPassword(ev.target.value);
                }}
              />
              <Input
                type="password"
                id="confirmPassword"
                labelValue="Confirm Password*"
                onchange={(ev) => {
                  setCPassword(ev.target.value);
                }}
              />
            </div>
          </div>
          <p className="__errors" ref={__errors}></p>
          <p>
            <input type="checkbox" id="__terms" />
            <label htmlFor="__terms">
              I've read and accept the <span>terms & condtions*</span>
            </label>
          </p>
          <FlatButton value="sign up" />
          <p className="down-form">
            Already have an account? <Link to="login">login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default Register;
