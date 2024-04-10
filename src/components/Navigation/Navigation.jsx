import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/movies">
        <h2>Movies</h2>
      </NavLink>
    </nav>
  );
};

export default Navigation;
