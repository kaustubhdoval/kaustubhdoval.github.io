import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/outfit";
import "@fontsource/inter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div class="glow-cursor" id="glow-cursor"></div>
  </StrictMode>
);
