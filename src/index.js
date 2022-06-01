import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./static/css/index.css";
import "./static/css/fonts.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

serviceWorkerRegistration.register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    // Commented this strict mode to avoid running useEffect() twice
    // On production environment it can be uncommented
    <BrowserRouter>
        <App />
    </BrowserRouter>
    // </React.StrictMode>
);
