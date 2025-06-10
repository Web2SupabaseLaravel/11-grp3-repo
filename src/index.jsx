import React from 'react';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/layout.scss";
import { Appointment } from "./screens/Appointment";


createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Appointment />
  </StrictMode>,
);
