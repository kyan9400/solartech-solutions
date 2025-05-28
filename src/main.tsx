// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Or your main App component
import "./index.css"; // <-- MAKE SURE THIS LINE IS PRESENT AND POINTS TO YOUR CSS FILE WITH TAILWIND DIRECTIVES

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
