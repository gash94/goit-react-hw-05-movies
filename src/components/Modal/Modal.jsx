import React, { Component } from "react";

import PropTypes from "prop-types";

import css from "./Modal.module.css";

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e) => {
        if (e.code === "Escape") {
            return this.props.onClose();
        }
    };

    render() {
        const { pic } = this.props;
        return (
            <div className={css.Overlay} onClick={this.handleKeyDown}>
                <div className={css.Modal}>
                    <img src={pic} alt="" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func,
    pic: PropTypes.string.isRequired,
};
