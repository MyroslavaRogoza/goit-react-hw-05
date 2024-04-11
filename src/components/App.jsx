import { useState, useEffect } from "react";
import { Routes, Route, NavLink, useSearchParams } from "react-router-dom";
import "./App.css";
import { getTrendingMovies, getMoviesByQuery } from "../moviesApi";
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const [trendMovies, setTrendMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get("query");

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       setError(false);
  //       setLoader(true);
  //       const {
  //         data: { results },
  //       } = await getTrendingMovies();
  //       setTrendMovies(results);
  //       console.log(results);
  //     } catch (error) {
  //       console.log(error);
  //       setError(true);
  //     } finally {
  //       setLoader(false);
  //     }
  //   };
  //   fetchMovies();
  // }, []);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const {
  //         data: { results },
  //       } = await getMoviesByQuery(query);
  //       setTrendMovies(results);
  //       console.log(results);
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       console.log("finall");
  //     }
  //   };
  //   fetchMovies();
  // }, [query]);

  return (
    <>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}/>        
          <Route path="/movies/:movieId/cast" element={<MovieCast />} />
          <Route path="/movies/:movieId/reviews" element={<MovieReviews />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
