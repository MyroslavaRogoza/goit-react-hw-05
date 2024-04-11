import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import { useMovieSearch } from "../../hooks/useMovieSearch";
const HomePage = () => {
  const { movies, loader, error } = useMovieSearch({ isSearchPage: false });
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </div>
  );
};

export default HomePage;
