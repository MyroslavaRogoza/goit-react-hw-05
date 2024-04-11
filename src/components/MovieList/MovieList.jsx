import { NavLink } from "react-router-dom";
const MovieList = ({ movies }) => {
  return (
    <ul>
      {Array.isArray(movies) &&
        movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{title}</NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
