import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/movieApi";
import css from "./Reviews.module.css";

const Reviews = () => {
    const [movieReviews, setMovieReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const currentMovie = await getReviews(movieId);

            setMovieReviews(currentMovie);
        };
        getMovie();
    }, [movieId]);
    return (
        <>
            {movieReviews.length === 0 ? (
                <p>There are no reviews available for this movie</p>
            ) : (
                <ul className={css.listReviews}>
                    {movieReviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h2>Author: {author}</h2>
                            <p> {content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
export default Reviews;
