import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, onShow, tags }) {
    return (
        <li className={css.galleryItem}>
            <img
                className={css.ImageGalleryItemImage}
                onClick={() => onShow(largeImageURL)}
                src={webformatURL}
                alt={tags}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    onShow: PropTypes.func,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
