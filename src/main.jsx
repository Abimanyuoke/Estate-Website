import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import HouseContextProvider from "./components/HouseContext";
import "./index.css";  // Pastikan file ini ada

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <HouseContextProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </HouseContextProvider>
  );
} else {
  console.error("Elemen #root tidak ditemukan di index.html");
}
