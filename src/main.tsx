import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import App from "@/App";
import GlobalStyles from "@/styles/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container!);
const titleInitiate = import.meta.env.VITE_APP_NAME ?? "Vite + React + TS App";

root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet title={titleInitiate} />
            <Router>
                <GlobalStyles />
                <App />
            </Router>
        </HelmetProvider>
    </React.StrictMode>
);
