import { Link, Route, Routes, useParams } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import { useSearchParams } from "react-router-dom";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import { useMovieSearch } from "../../hooks/useMovieSearch";

const MovieDetailsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const { movies, loader, error, getMovieId } = useMovieSearch({
    isSearchPage: false,
  });
  getMovieId(movieId);
  
  return (
    <>
      <div>MovieDetailsPage</div>
      {/* <ul>
        {Array.isArray(movies) &&
          movies.map(({ title, id, popularity }) => {
            return (
              <li key={id}>
                <h2>{title}</h2>
                <p>User Score {popularity}%</p>
                <h3>Overview</h3>
                <h3>Genres</h3>
              </li>
            );
          })}
      </ul> */}

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
