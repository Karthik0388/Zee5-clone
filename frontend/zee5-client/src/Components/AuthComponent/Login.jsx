import React, { useState, useEffect } from "react";
import "./Auth.css";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LogIn } from "../../Redux/Actions/actions";
import { useDispatch } from 'react-redux';

const Login = () => {
  let dispatch = useDispatch();
  let [state, setState] = useState({
    email: "",
    password: "",
  });
  let { email, password } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      //?Normal Authentition
      // let payload = { email, password };
      // let res = await axios.post("/signin", payload);
      // console.log(res);
      // let { TOKEN } = res.data;
      // console.log(TOKEN);
      // localStorage.setItem("SignIn-TOKEN", TOKEN);
      dispatch(LogIn(state))
      window.location.assign("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section id="authSection">
      <article>
        <div className="authBlock">
          <h1>Login to ZEE5</h1>
          <p>
            Login to continue enjoying uninterrupted video and
            <br /> personalised experience.
          </p>
          <div className="iconBlock">
            <span>
              <BsApple />
            </span>
            <span>
              <FcGoogle />
            </span>
            <span>
              <BsFacebook />
            </span>
            <span>
              <AiFillTwitterCircle />
            </span>
          </div>
          <div className="orBlock">
            <span>or</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email ID"
              />
            </div>
            <div className="input">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
              />
            </div>
            <p>
              <a href="">Forget Password ?</a>
            </p>
            <div className="btn2">
              <button>Log In</button>
            </div>
          </form>
          <p>
            New to ZEE5?<Link to="/signup">Register</Link>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Login;
