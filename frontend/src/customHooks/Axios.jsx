import axios from "axios";

//const baseURL = process.env.NODE_ENV === "production" ? "https://backend-5rgo.onrender.com/" : "http://localhost:3000/";
const t = ["https://backend-5rgo.onrender.com/", "http://localhost:3000/"];
const baseURLs = "http://localhost:3000/";
const Axios = axios.create({
  baseURL: baseURLs,
});

export default Axios;
