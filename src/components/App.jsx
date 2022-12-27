import React, { Component } from "react";

import css from "./App.module.css";

class App extends Component {
    state = {
        contacts: [],
        filter: "",
    };

    render() {
        return (
            <div className={css.app}>
                <h1>Phonebook</h1>
            </div>
        );
    }
}

export default App;
