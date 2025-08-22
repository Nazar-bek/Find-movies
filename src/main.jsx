import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./components/app/app";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
