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
import AtelierRouter from './apps/atelier/AtelierRouter';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <HomeRouter />
            <AtelierRouter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
