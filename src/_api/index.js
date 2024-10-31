import axios from "axios";

const api = axios.create({
  baseURL: "https://tested-puzzled-poppy.glitch.me",
});

export default api;
