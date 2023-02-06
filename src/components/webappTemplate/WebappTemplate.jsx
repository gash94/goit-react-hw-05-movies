import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Nav from "../nav/Nav";

const WebappTemplate = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    );
};

export default WebappTemplate;
