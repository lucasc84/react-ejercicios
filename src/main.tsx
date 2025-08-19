import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // HashRouter para evitar 404 en GitHub Pages
import App from "./App";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

