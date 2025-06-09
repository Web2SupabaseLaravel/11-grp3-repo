import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./screens/Dashboard/Dashboard";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
);
