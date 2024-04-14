import css from "./MovieReviews.module.css";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const MovieReviews = () => {
  let { movieId } = useParams();
  const { getMovieAdditionalInfo, additionalInfo, loader, error, getMovieId } =
    useMovieSearch({
      isSearchPage: false,
    });
  getMovieAdditionalInfo("reviews");
  getMovieId(movieId);
  return (
    <>
      <ul className={css.reviewsContainer}>
        {additionalInfo &&
        Array.isArray(additionalInfo.results) &&
        additionalInfo.results.length > 0 ? (
          additionalInfo.results.map(({ id, author, content, created_at }) => {
            return (
              <li key={id} className={css.reviewsItem}>
                <h3>
                  Name: <span className={css.reviewsAuthor}>{author}</span>
                </h3>
                <p>{content}</p>
                <p>
                  {typeof created_at === "string" && created_at.slice(0, 10)}
                </p>
              </li>
            );
          })
        ) : (
          <p>We don&rsquo;t have any reviews for this movie </p>
        )}
      </ul>
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default MovieReviews;
