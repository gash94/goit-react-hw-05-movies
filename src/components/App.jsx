import { useState, useEffect } from "react";
import fetchImg from "../services/PixabayApi";

import css from "./App.module.css";

import Loader from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

function App() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [largeImageURL, setLargeImageURL] = useState("");

    const onSubmit = (queryInput) => {
        if (queryInput !== query) {
            setImages([]);
            setPage(1);
            setQuery(queryInput);
        }
    };

    useEffect(() => {
        if (query === "") return;

        const fetchQuery = async (valueQuery) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetchImg(valueQuery, page);
                setImages((prevState) => [...prevState, ...response]);
            } catch (error) {
                setError(error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 600);
            }
        };

        fetchQuery(query);
    }, [page, query]);

    const handleLoadMore = () => {
        setPage((prevState) => prevState + 1);
    };

    const onShow = (url) => {
        setShowModal(true);
        setLargeImageURL(url);
    };

    const onClose = () => {
        setShowModal(false);
        setLargeImageURL("");
    };

    return (
        <div className={css.App}>
            {error && <p>Something went wrong: {error.message}</p>}
            <Searchbar onSubmit={onSubmit} />
            <ImageGallery images={images} onShow={onShow} />
            {images.length && <Button onClick={handleLoadMore} />}
            {isLoading && <Loader />}
            {showModal && <Modal onClose={onClose} image={largeImageURL} />}
        </div>
    );
}

export default App;
