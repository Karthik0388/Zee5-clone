import React, { useState } from "react";
import "./Auth.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import axios from "./../../Axios/axios";
import { useDispatch } from "react-redux";
import { SignUp } from "./../../Redux/Actions/actions";

const Signup = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  let { username, email, password, password1 } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    //?Authentication starts here
    // let payload = {
    //   username: username,
    //   email: email,
    //   password: password,
    // };

    // let res = await axios.post("/signup", payload);
    // let { TOKEN } = res.data;
    // console.log(TOKEN);
    // localStorage.setItem("Signup-TOKEN", TOKEN);
    // console.log(payload);

    //?Authentication starts here
    dispatch(SignUp(state));
    window.location.assign("/login");
  };

  return (
    <section id="authSection">
      <article>
        <div className="authBlock">
          <h1>Create a new account</h1>
          <form onSubmit={handleSubmit}>
            <p>
              Create an account to continue enjoying <br /> uninterrupted video
              and personalised <br /> experience
            </p>
            <div className="btn1">
              <button>
                <span>
                  <FcGoogle />
                </span>
                <span>Sign in</span>
              </button>
            </div>
            <div className="orBlock">
              <span>or</span>
            </div>
            <div className="input">
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>
            <div className="input">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email ID"
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password1"
                value={password1}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>

            <p>
              By Proceeding you agree to our <a href="">Terms of Services</a>&
              <br />
              <a href="">Privacy Policy</a>.
            </p>
            <div className="btn2">
              <button>Register</button>
            </div>
          </form>
          <p>
            Already registered?<Link to="/login">Login</Link>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Signup;
