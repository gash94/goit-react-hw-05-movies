import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Nav from "./Nav";

import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.App}>
            <Nav />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<Movies />} />
            </Routes>
        </div>
    );
};

export default App;
