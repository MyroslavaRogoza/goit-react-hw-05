import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import {
  getTrendingMovies,
  getMoviesByQuery,
  getMoviesByID,
} from "../moviesApi";
export const useMovieSearch = ({ isSearchPage = false, isGetId = false }) => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get("query");
  let movieId = null;

  useEffect(() => {
    if (isSearchPage) return;
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoader(true);
        const {
          data: { results },
        } = await getTrendingMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, [isSearchPage]);

  useEffect(() => {
    if (query === null) return;
    const fetchMovies = async () => {
      try {
        setError(false);
        setLoader(true);
        const {
          data: { results },
        } = await getMoviesByQuery(query);
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, [query]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (movieId === null) return;
      try {
        setError(false);
        setLoader(true);
        const { data } = await getMoviesByID(movieId);
        setMovies(data);
        console.log("byid", data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, [movieId]);

  function onSetSearchQuery(movieTitle) {
    //  const checkedMovieTitle= movieTitle !== "" ? { movieTitle } : {};
    setSearchParams({ query: movieTitle });
  }
  function getMovieId(id) {
    console.log(id);
    movieId = id;
  }

  return { movies, loader, error, onSetSearchQuery, getMovieId };
};
