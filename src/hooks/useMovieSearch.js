import { useState, useEffect } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import {
  getTrendingMovies,
  getMoviesByQuery,
  getMoviesByID,
  getAdditionalInfo,
} from "../moviesApi";
export const useMovieSearch = ({ isSearchPage = false }) => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [movieImage, setMovieImage] = useState(null);
  const query = searchParams.get("query");
  const [additionalInfo, setAdditionalInfo] = useState(null);
  let movieId = null;
  let addParameterName = null;

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
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, [movieId, movieImage]);

  useEffect(() => {
    const fetchMovies = async () => {
      if (addParameterName === null) return;
      try {
        setError(false);
        setLoader(true);
        const { data } = await getAdditionalInfo(movieId, addParameterName);
        setAdditionalInfo(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchMovies();
  }, [movieId, addParameterName]);

  function onSetSearchQuery(movieTitle) {
    setSearchParams({ query: movieTitle });
  }
  function getMovieId(id) {
    movieId = id;
  }
  function getMovieAdditionalInfo(parameterName) {
    addParameterName = parameterName;
  }

  return {
    movies,
    loader,
    error,
    onSetSearchQuery,
    getMovieId,
    getMovieAdditionalInfo,
    additionalInfo,
  };
};
