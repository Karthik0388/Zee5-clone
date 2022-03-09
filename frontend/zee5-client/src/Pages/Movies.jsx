import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateMovies } from "../Redux/Actions/actions";

const Movies = () => {
  let dispatch = useDispatch();
  let [Poster, setPoster] = useState("");

  let [state, setState] = useState({
    movie_name: "",
    movie_gener: "",
    movie_language: "",
    movie_poster: "",
  });

  let { movie_name, movie_gener, movie_language, movie_poster } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handlePoster = e => {
    setPoster(e.target.files[0]);
  };
  console.log(state);
  console.log(Poster);

  let handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Poster", Poster);
    formData.append("movie_name", movie_name);
    formData.append("movie_gener", movie_gener);
    formData.append("movie_language", movie_language);

    console.log(formData);
    try {
      dispatch(CreateMovies(formData));
    } catch (err) {
      console.log("Error");
    }
  };
  return (
    <section id="movieSection">
      <article>
        <form onSubmit={handleSubmit} encType="multipart/form-data" action="">
          <div className="form-group">
            <lable htmlFor="movie_name">Movie Name</lable>
            <input
              type="text"
              className="form-control"
              name="movie_name"
              value={movie_name}
              onChange={handleChange}
              placeholder="Enter Movie name"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="movie_language">Movie Language</lable>
            <input
              type="text"
              className="form-control"
              name="movie_language"
              value={movie_language}
              onChange={handleChange}
              placeholder="Enter Movie Language"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="movie_gener">Movie Gener</lable>
            <input
              type="text"
              className="form-control"
              name="movie_gener"
              value={movie_gener}
              onChange={handleChange}
              placeholder="Enter Movie Gener"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="movie_poster">Movie Poster</lable>
            <input
              type="file"
              className="form-control"
              name="movie_poster"
              value={movie_poster}
              onChange={handlePoster}
            />
          </div>
          <div className="form-group">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Movies;
