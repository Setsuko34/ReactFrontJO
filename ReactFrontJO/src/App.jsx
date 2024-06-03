import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil.jsx";
import Lieux from "./pages/Lieux.jsx";
import Profil from "./pages/Profil.jsx";
import Disciplines from "./pages/Disciplines.jsx";
import Football from "./pages/Football.jsx";
import Basketball from "./pages/Basketball.jsx";
import Favoris from "./pages/Favoris.jsx";
import DisciplineDetails from "./pages/DisciplineDetails.jsx";


function App() {
  const [favoris, setFavoris] = useState([]);

  const managementFavoris = (event) => {
    if (!favoris.includes(event)) {
      setFavoris([...favoris, event]);
    } else {
      setFavoris(favoris.filter((item) => item !== event));
    }
  };


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/lieux" element={<Lieux />} />
        <Route path="/disciplines" element={<Disciplines managementFavoris={managementFavoris} setFavoris={setFavoris} favoris={favoris} />} />
        <Route path="/football" element={<Football />} />
        <Route path="/basketball" element={<Basketball />} />
        <Route path="/favoris" element={<Favoris managementFavoris={managementFavoris} favoris={favoris} />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/disciplinedetails" element={<DisciplineDetails managementFavoris={managementFavoris} setFavoris={setFavoris} favoris={favoris} />} />
      </Routes>
    </Router>
  );
}

export default App;
