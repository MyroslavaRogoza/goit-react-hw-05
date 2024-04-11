import { Link, Route, Routes, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import { useSearchParams } from "react-router-dom";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movies, loader, error, getMovieId } = useMovieSearch({
    isSearchPage: false,
  });
  getMovieId(movieId);
  const baseImgUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {movies instanceof Object && (
        <div>
          <h2>
            {movies.title} (
            {typeof movies.release_date === "string" &&
              movies.release_date.slice(0, 4)}
            )
          </h2>
          <p>User Score {Math.floor(movies.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <ul>
            <h3>Genres</h3>
            {Array.isArray(movies.genres) &&
              movies.genres.map(({ id, name }) => {
                return <li key={id}>{name}</li>;
              })}
          </ul>
          <p></p>
          <img src={`${baseImgUrl}${movies.poster_path}`} alt="" />
        </div>
      )}

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Routes>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
