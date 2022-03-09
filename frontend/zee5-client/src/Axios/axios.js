import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  // headers: {
  //   "Content-Type": "multipart/form-data",
  // },
});
// request interceptor for adding token
axiosInstance.interceptors.request.use(config => {
  // add token to request headers
  config.headers["Authorization"] = localStorage.getItem("TOKEN");
  return config;
});

export default axiosInstance;
