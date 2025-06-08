import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles/globals.css";
import Main from "../layouts/Main.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
);
