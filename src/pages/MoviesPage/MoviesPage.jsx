import css from "./MoviesPage.module.css";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const { movies, loader, error, onSetSearchQuery } = useMovieSearch({
    isSearchPage: true,
  });
  function handleSubmit(evt) {
    evt.preventDefault();
    const movieTitle = evt.currentTarget.elements.userInput.value.trim();
    onSetSearchQuery(movieTitle);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.movieSearchForm}>
        <input type="text" name="userInput" className={css.moviesInput}/>
        <button type="submit" className={css.submitBtn}>Seach</button>
      </form>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movies && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
