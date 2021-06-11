/* ========================================================================== */
/* React-Redux                                                                */
/* ========================================================================== */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

/* ========================================================================== */
/* App Routers                                                                */
/* ========================================================================== */
import HomeRouter from './apps/home/HomeRouter';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HomeRouter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
