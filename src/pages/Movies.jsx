import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import css from "./Movies.module.css";

import { searchMovies } from "../services/movieApi";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();

        const input = event.currentTarget;

        setSearchParams(
            query !== "" ? { query: input.elements.query.value } : {}
        );
        input.reset();
    };

    useEffect(() => {
        if (query === "" || query === null) return;
        const getMovies = async () => {
            const { results } = await searchMovies(query);

            setMovies(results);
        };

        getMovies();
    }, [query]);

    return (
        <>
            <div className={css.Searchbar}>
                <form className={css.SearchForm} onSubmit={handleSubmit}>
                    <input
                        className={css.SearchFormInput}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        name="query"
                    />
                    <button type="submit" className={css.SearchFormButton}>
                        <span className={css.SearchFormButtonLabel}>
                            Search
                        </span>
                    </button>
                </form>
            </div>
            <ul>
                {movies &&
                    movies.map(({ id, title }) => (
                        <li key={id}>
                            <Link
                                to={`/movies/${id}`}
                                state={{ from: location }}>
                                <p>{title}</p>
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
};

export default Movies;
