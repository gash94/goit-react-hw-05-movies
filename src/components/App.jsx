import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

import WebappTemplate from "./webappTemplate/WebappTemplate";

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const Cast = lazy(() => import("./cast/Cast"));
const Reviews = lazy(() => import("./reviews/Reviews"));
const MovieDetails = lazy(() => import("./movieDetails/MovieDetails"));

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<WebappTemplate />}>
                    <Route index element={<Home />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />}>
                        <Route path="cast" element={<Cast />} />
                        <Route path="reviews" element={<Reviews />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;
