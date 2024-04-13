import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        <span>Home</span>
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        <span>Movies</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;
