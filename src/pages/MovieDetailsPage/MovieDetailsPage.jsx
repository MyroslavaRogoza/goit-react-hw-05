import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import {
  NavLink,
  Link,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

import { useMovieSearch } from "../../hooks/useMovieSearch";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  const { movieId } = useParams();
  const { movies, loader, error, getMovieId } = useMovieSearch({
    isSearchPage: false,
  });
  getMovieId(movieId);
  const detailsLinkClass = ({ isActive }) => {
    return clsx(isActive && css.addInfoActive);
  };

  return (
    <>
      <NavLink
        to={backLinkRef.current}
        className={({ isActive }) => {
          return clsx(css.goBackBtn, isActive && css.active);
        }}
      >
        Go back
      </NavLink>
      {movies instanceof Object && (
        <div className={css.movieDetailContainer}>
          <div className={css.infoDetails}>
            <h1>
              {movies.title} (
              {typeof movies.release_date === "string" &&
                movies.release_date.slice(0, 4)}
              )
            </h1>
            <p>User Score {Math.floor(movies.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movies.overview}</p>
            <ul className={css.movieGenresContainer}>
              <h3>Genres</h3>
              <div className={css.genres}>
                {Array.isArray(movies.genres) &&
                  movies.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
              </div>
            </ul>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
              alt={movies.name}
            />
          </div>
        </div>
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.addInfoContainer}>
        <li>
          <NavLink to="cast" className={detailsLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={detailsLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
