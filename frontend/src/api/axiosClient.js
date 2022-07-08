import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: { "content-type": "application/json" },
});

export default axiosClient;
