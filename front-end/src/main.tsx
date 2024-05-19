import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
