import axios from "axios";
const API_KEY = "4938472e7d9e3d095523caf2475a8b48";
const axoisInstanceMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
const options = {
  headers: {
    Authorization:
      "Baerer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTM4NDcyZTdkOWUzZDA5NTUyM2NhZjI0NzVhOGI0OCIsInN1YiI6IjY2MTU4YTM5M2Q3NDU0MDE4NTA5YWU1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.44MTSmHm3bpwsyXN-0DKs3xSqaG0BYzuLfZcq-dzQDo",
  },
};
export const getTrendingMovies = async () => {
  const data = axoisInstanceMovies.get(
    `trending/movie/day?language=en-US&api_key=${API_KEY}`,
    options
  );
  return data;
};

export const getMoviesByQuery = async (movieTitle) => {
  const data = axoisInstanceMovies.get(
    `search/movie?query=${movieTitle}&include_adult=false&api_key=${API_KEY}`,
    options
  );
  return data;
};
