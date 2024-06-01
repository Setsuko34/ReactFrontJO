import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";

export default function Favoris() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (event) => {
    if (!favorites.includes(event)) {
      setFavorites([...favorites, event]);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar addToFavorites={addToFavorites} />
      <Typography variant="h4" align="center" gutterBottom>
        Favoris
      </Typography>
      {favorites.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          {favorites.map((event, index) => (
            <Typography key={index}>{event}</Typography>
          ))}
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Typography variant="h4" align="center" gutterBottom>
            La liste de favoris est vide
          </Typography>
        </Box>
      )}
    </Box>
  );
}
