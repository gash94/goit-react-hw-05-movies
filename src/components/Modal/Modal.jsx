import React, { useEffect } from "react";

import PropTypes from "prop-types";

import css from "./Modal.module.css";

function Modal({ onCloseModal, image }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === "Escape") {
                return onCloseModal();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onCloseModal]);

    return (
        <div className={css.Overlay} onClick={onCloseModal}>
            <div className={css.Modal}>
                <img src={image} alt="" />
            </div>
        </div>
    );
}

Modal.propTypes = {
    onCloseModal: PropTypes.func,
    image: PropTypes.string.isRequired,
};

export default Modal;
