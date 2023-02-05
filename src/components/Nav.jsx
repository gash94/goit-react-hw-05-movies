import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

const Nav = () => (
    <nav>
        <NavLink to="/" className={css.link}>
            Home
        </NavLink>
        <NavLink to="/movies" className={css.link}>
            Movies
        </NavLink>
    </nav>
);
export default Nav;
