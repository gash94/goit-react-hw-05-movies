import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import PropTypes from "prop-types";

import css from "./ImageGallery.module.css";

export default class ImageGallery extends Component {
    render() {
        const { images, onShow } = this.props;

        return (
            <ul className={css.ImageGallery}>
                {images.map(({ webformatURL, largeImageURL, id }) => (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        onShow={onShow}
                    />
                ))}
            </ul>
        );
    }
}

ImageGallery.propTypes = {
    onShow: PropTypes.func,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
            webformatURL: PropTypes.string.isRequired,
        })
    ),
};
