import axios from "axios";

const api = axios.create({
  baseURL: "https://tidy-ripple-plantain.glitch.me",
});

export default api;
