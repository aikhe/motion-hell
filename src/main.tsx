import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/globals.scss";

import Main from "../layouts/Main.tsx";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
