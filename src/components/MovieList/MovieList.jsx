import { NavLink } from "react-router-dom";
const MovieList = ({ trendMovies }) => {
  return (
    <ul>
      {Array.isArray(trendMovies) &&
        trendMovies.map(({ title, id }) => {
          return (
            <li key={id}>
              <NavLink>{title}</NavLink>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;
