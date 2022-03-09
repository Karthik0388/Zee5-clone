import axiosInstance from "../../Axios/axios";

export let SignUp = payload => {
  return async dispatch => {
    await axiosInstance
      .post("/api/auth/signup", payload)
      .then(res => {
        console.log(res);
        localStorage.setItem("Signup-Token", res.data.TOKEN);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Successfully Registered");
    dispatch({
      type: "SIGN_UP",
      payload: payload,
    });
  };
};

export let LogIn = payload => {
  return async dispatch => {
    await axiosInstance
      .post("/api/auth/signin", payload)
      .then(res => {
        console.log(res);
        localStorage.setItem("Signin-Token", res.data.TOKEN);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Successfully Logged In");
    dispatch({
      type: "SIGN_IN",
      payload: payload,
    });
  };
};

export let CreateMovies = payload => {
  return async dispatch => {
    await axiosInstance
      .post("/MoviesData/movie-data", payload)
      .then(res => {
        console.log(res);
        console.log(payload);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Successfully Stored");
    dispatch({
      type: "CREATE_MOVIES",
      payload: payload,
    });
  };
};

export let GetMovies = payload => {
  return async dispatch => {
    await axiosInstance
      .get("/MoviesData/movie-data", payload)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log("Successfully Fetched");
    dispatch({
      type: "GET_MOVIES",
      payload: payload,
    });
  };
};

