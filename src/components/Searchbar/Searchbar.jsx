import React, { useState } from "react";
import PropTypes from "prop-types";

import css from "./Searchbar.module.css";

const Searchbar = function Searchbar({ onSubmit }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (e) => {
        setQuery(e.target.value.toLowerCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (query.trim() === "") {
            alert.error("Enter your search query");
            return;
        }

        onSubmit(query);
    };
    return (
        <header className={css.Searchbar}>
            <form className={css.SearchForm} onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                />
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                </button>
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
