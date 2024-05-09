import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Lieux from "./pages/Lieux.jsx";
import Profil from "./pages/Profil.jsx";
import Disciplines from "./pages/Disciplines.jsx";
import Football from "./pages/Football.jsx";
import Basketball from "./pages/Basketball.jsx";
import Favoris from "./pages/Favoris.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/lieux" element={<Lieux />} />
        <Route path="/disciplines" element={<Disciplines />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
