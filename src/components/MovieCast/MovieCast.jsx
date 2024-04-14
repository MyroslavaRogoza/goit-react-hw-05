import css from "./MovieCast.module.css";
import { useParams } from "react-router-dom";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const MovieCast = () => {
  let { movieId } = useParams();

  const { getMovieAdditionalInfo, additionalInfo, loader, error, getMovieId } =
    useMovieSearch({
      isSearchPage: false,
    });

  getMovieId(movieId);
  getMovieAdditionalInfo("credits");

  return (
    <>
      <ul className={css.movieCastContainer}>
        {additionalInfo &&
          Array.isArray(additionalInfo.cast) &&
          additionalInfo.cast.map(
            ({ id, original_name, profile_path, character }) => {
              return (
                <li key={id} className={css.movieCastItem}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={original_name}
                  />
                  <div className={css.castMovieContainer}>
                    <h3> {original_name}</h3>
                    <p>Character: {character}</p>
                  </div>
                </li>
              );
            }
          )}
      </ul>
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};

export default MovieCast;
