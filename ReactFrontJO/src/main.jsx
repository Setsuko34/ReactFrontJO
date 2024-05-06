import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Places from "./pages/Places.jsx";
import Profil from "./pages/Profil.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/places" element={<Places />} />
        <Route path="/sports" element={<Accueil />} />
        <Route path="/events" element={<Accueil />} />
        <Route path="/profile" element={<Profil />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
