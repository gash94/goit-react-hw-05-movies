import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails, IMAGE_URL } from "../services/movieApi";

import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getMovie = async () => {
            const currentMovie = await getMovieDetails(movieId);

            setMovie(currentMovie);
        };
        getMovie();
    }, [movieId]);
    return (
        <>
            {!movie ? (
                <div>This movie is not found</div>
            ) : (
                <>
                    <Link to="/">
                        <button type="button">Go back</button>
                    </Link>
                    <div className={css.movieContainer}>
                        <div className={css.movieImg}>
                            <img
                                src={
                                    movie.poster_path
                                        ? IMAGE_URL + movie.poster_path
                                        : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                                }
                                alt={movie.title}
                                widht=""
                                height=""
                            />
                        </div>

                        <div>
                            <h2>{movie.title}</h2>
                            <p>User Score: {`${movie.vote_average * 10}`}%</p>
                            <h3>Overview</h3>
                            <p>{`${movie.overview}`}</p>
                            <h3>Genres</h3>
                            <p>{`${movie.genres
                                .map((genre) => genre.name)
                                .join(" / ")}`}</p>
                        </div>
                    </div>
                </>
            )}

            <h2>Additional information</h2>
            <nav>
                <Link to={"cast"}>
                    <button type="button">Cast</button>
                </Link>
                <Link to={"reviews"}>
                    <button type="button">Reviews</button>
                </Link>
            </nav>
            <Outlet />
        </>
    );
};

export default MovieDetails;
