import { useParams } from "react-router-dom";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
const MovieCast = () => {
  let { movieId } = useParams();
  const baseImgUrl = "https://image.tmdb.org/t/p/w200";

  const { getMovieAdditionalInfo, additionalInfo, loader, error, getMovieId } =
    useMovieSearch({
      isSearchPage: false,
    });

  getMovieId(movieId);
  getMovieAdditionalInfo("credits");

  return (
    <>
      <ul>
        {additionalInfo &&
          Array.isArray(additionalInfo.cast) &&
          additionalInfo.cast.map(
            ({ id, original_name, profile_path, character }) => {
              return (
                <li key={id}>
                  <img
                    src={`${baseImgUrl}${profile_path}`}
                    alt={original_name}
                  />
                  <p> {original_name}</p>
                  <p>Character: {character}</p>
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
