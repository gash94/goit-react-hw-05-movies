import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import PropTypes from "prop-types";

import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, onShowModal }) {
    return (
        <ul className={css.ImageGallery}>
            {images.map(({ webformatURL, largeImageURL, id, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    onShow={onShowModal}
                    tags={tags}
                />
            ))}
        </ul>
    );
}

ImageGallery.propTypes = {
    onShowModal: PropTypes.func,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
        })
    ),
};
