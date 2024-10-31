import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  // baseURL: "https://tidy-ripple-plantain.glitch.me",
});

export default api;
