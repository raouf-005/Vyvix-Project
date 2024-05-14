import axios from "axios";

//const baseURL = process.env.NODE_ENV === "production" ? "https://backend-5rgo.onrender.com/" : "http://localhost:3000/";
const t=["https://backend-5rgo.onrender.com/" , "http://localhost:3000/"]
const baseURL ="https://backend-5rgo.onrender.com/";
const Axios = axios.create({
    baseURL,

});

export default Axios;
