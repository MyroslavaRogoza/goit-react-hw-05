import { Link, Route, Routes } from "react-router-dom";
import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
const MovieDetailsPage = () => {
  return (
    <>
      <div>MovieDetailsPage</div>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Routes>
        <Route path="cast" element={<MovieCast/>} />
        <Route path="reviews" element={<MovieReviews/>} />
      </Routes>
    </>
  );
};

export default MovieDetailsPage;
