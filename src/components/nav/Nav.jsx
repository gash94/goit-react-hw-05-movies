import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    display: inline-block;
    color: black;
    padding: 20px;
    font-weight: 500;
    text-decoration: none;
    color: #2a363b;
    font-size: 30px;

    &.active {
        color: orange;
        text-decoration: underline;
    }
`;

const Nav = () => (
    <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
    </nav>
);
export default Nav;
