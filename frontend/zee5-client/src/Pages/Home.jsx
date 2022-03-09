import React, { useState, useEffect } from "react";
import CarouselSlider from "./Sliders/CarouselSlider";
import NavBar from "./Zee5Header/NavBar";
import "./Home.css";
import Slider1 from "./Sliders/Slider1";
import Slider2 from "./Sliders/Slider2";
import Slider3 from "./Sliders/Slider3";
import { useSelector } from "react-redux";
import axiosInstance from "./../Axios/axios";
import Movies from "./Movies";

const Home = () => {
  let [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(state);
  // useEffect(() => {
  //   let fetchApi = async () => {

  //     let signIn = await axiosInstance.get(
  //       "/get",
  //       `Bearer${localStorage.getItem("Signin-Token")}`
  //     );

  //     console.log(signIn);
  //   };
  //   fetchApi();
  // }, []);

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <CarouselSlider />
      <Slider1 />
      <Slider2 />
      <Slider3 />
    </div>
  );
};

export default Home;
