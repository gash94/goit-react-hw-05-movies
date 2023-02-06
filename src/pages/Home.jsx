import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { fetchTrendingMovies } from "../services/movieApi";

const Home = () => {
    const location = useLocation();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const { results } = await fetchTrendingMovies();

            setMovies(results);
        };

        getMovies();
    }, []);

    return (
        <>
            <h1>Tranding movies today:</h1>
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
export default Home;
