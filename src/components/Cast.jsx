import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getMovieCast } from "../services/movieApi";

import css from "./Cast.module.css";

const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const currentMovie = await getMovieCast(movieId);

            setMovieCast(currentMovie);
        };
        getMovie();
    }, [movieId]);

    return (
        <>
            <ul className={css.castList}>
                {movieCast.map(
                    ({ id, profile_path, original_name, name, character }) => (
                        <li key={id}>
                            <img
                                src={
                                    profile_path
                                        ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                                        : `https://www.banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png`
                                }
                                alt={original_name}
                            />
                            <h3>{name}</h3>
                            <p>Character: {character}</p>
                        </li>
                    )
                )}
            </ul>
        </>
    );
};
export default Cast;
