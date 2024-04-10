import MovieList from "../../components/MovieList/MovieList";
import { useMovieSearch } from "../../hooks/useMovieSearch";
const HomePage = ({ trendMovies }) => {
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList trendMovies={trendMovies} />
    </div>
  );
};

export default HomePage;
