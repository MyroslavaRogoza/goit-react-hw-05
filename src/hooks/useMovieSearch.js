import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getTrendingMovies, getMoviesByQuery } from "../moviesApi";
export const useMovieSearch = ({ isSearchPage = false }) => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get("query");

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
  function onSetSearchQuery(movieTitle) {
    //  const checkedMovieTitle= movieTitle !== "" ? { movieTitle } : {};
    setSearchParams({ query: movieTitle });
  }
  return { movies, loader, error, onSetSearchQuery };
};
