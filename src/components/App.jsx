import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Nav from "./Nav";
import Cast from "./Cast";
import Reviews from "./Reviews";
import MoviesDetails from "./MovieDetails";

import css from "./App.module.css";

const App = () => {
    return (
        <div className={css.App}>
            <Nav />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId" element={<MoviesDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
