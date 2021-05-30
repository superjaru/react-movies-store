import axios from "axios";
const KEY = "ac4bd11617aa6aa8053385b4823a3161";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/search/movie",
  params: {
    api_key: KEY,
  },
});
