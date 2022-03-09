import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import axiosInstance from "../../Axios/axios";

const Slider1 = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let fetchPoster = await axiosInstance.get("/MoviesData/movie-data");
      setState(fetchPoster.data.getMovies);
    };
    fetchData();
  }, []);
  console.log(state);

  let mapPoster =
    state.length &&
    state.map(x => {
      let { id,movie_name, movie_poster } = x;
      return (
        <div id={id}>
          <img src={movie_poster[0].path.slice(45)} alt="img/jpg" />
          <h1>{movie_name}</h1>
        </div>
      );
    });

  return (
    <section id="section1Block">
      <article>
        <div className="topSection">
          <h2>ZEE5 Originals | First Ep Free</h2>
          <p>
            More
            <span>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
        <div className="bottomSection">
          <div className="img1Block">
            <a href="/">
              {mapPoster}
              {/* <img
                src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-3444/portrait/1920x77000fb0aef19c44cba86897d8612b2758cbbab3c59cedd49a4b6d9a0f01eab56b5.jpg"
                alt="StaticImg1"
              /> */}
            </a>
          </div>
          {/* <div className="img2Block">
            <a href="/">
              <img
                src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-tvshow_984782182/portrait/06tvshow984782182incove.jpg"
                alt="StaticImg2"
              />
            </a>
          </div>
          <div className="img3Block">
            <a href="/">
              <img
                src="https://akamaividz2.zee5.com/image/upload/w_195,h_293,c_scale,f_webp,q_auto:eco,dpr_2.0/resources/0-6-974/portrait/06974cover.jpg"
                alt="StaticImg3"
              />
            </a>
          </div> */}
        </div>
      </article>
    </section>
  );
};

export default Slider1;
