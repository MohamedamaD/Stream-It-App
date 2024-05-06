import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { images } from "../../constants";
import { Input, FlatButton } from "../../components";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { setUserInfo } from "../../store/slices/userSlice";
import { useHistory } from "react-router-dom";
export const Login = () => {
  const links = [
    { name: "linkedin", link: "" },
    { name: "amazon", link: "" },
    { name: "google", link: "" },
  ];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (ev) => {
    ev.preventDefault();

    const body = JSON.stringify({
      email,
      password,
    });

    const res = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    console.log(result);
    if (res.status === 200) {
      dispatch(setUserInfo(result.data[0]));
      history.push("/");
    } else if (res.status === 404) {
      setShowError(true);
      setMessage(result.message);
    }
  };
  return (
    <div className="__login">
      {showError && (
        <div className="error-popup">
          <span>{message}</span>
          <span>Please try again.</span>
          <div onClick={() => setShowError(false)}>
            <FlatButton value={"close"} />
          </div>
        </div>
      )}
      <div className="container __login__container">
        <div className="__container__wrapper">
          <div className="logo">
            <img src={images.LOGO} alt="logo" />
          </div>
          <form onSubmit={submitHandler}>
            <Input
              id="email"
              labelValue="Username or Email Address"
              type="email"
              onchange={(ev) => setEmail(ev.target.value)}
            />
            <Input
              id="password"
              labelValue="password"
              type="password"
              onchange={(ev) => setPassword(ev.target.value)}
            />
            <div className="__forget-password">
              <a href="##">forget Password?</a>
            </div>
            <div className="input-fields __checkbox-wrapper">
              <div className="__custom-checkbox">
                <input type="checkbox" id="checkbox" />
                <span>
                  <BiCheck size={20} />
                </span>
              </div>
              <label htmlFor="checkbox" style={{ margin: 0 }}>
                Remember Me
              </label>
            </div>
            <FlatButton
              value="log in"
              className="__submit-btn"
              onClick={() => {}}
            />
            <div className="__register-wrapper">
              New to Streamit?<Link to="register"> register</Link>
            </div>
          </form>
          <div className="__br-wrapper">
            <span className="__line"></span>
            <span className="__br">or</span>
            <span className="__line"></span>
          </div>
          <div className="__links">
            {links.map((item, i) => (
              <a
                href={item.link}
                key={item + i}
                className={`__${item.name} __link`}
              >
                <box-icon name={item.name} type="logo" color="#fff" size="md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
