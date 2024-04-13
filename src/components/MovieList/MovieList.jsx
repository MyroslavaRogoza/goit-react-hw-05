import { NavLink,useLocation } from "react-router-dom";
const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ol>
      {Array.isArray(movies) &&
        movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={location}>{title}</NavLink>
            </li>
          );
        })}
    </ol>
  );
};

export default MovieList;
