import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/globals.css";

import Main from "../layouts/Main.tsx";

const rootElement = document.getElementById("lenis-root");

if (rootElement) {
  ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>,
  );
} else {
  console.error("Error: rootElement is not found");
}
