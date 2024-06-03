import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from "../assets/data/sports.json";

export default function Favoris({ favoris, managementFavoris }) {
  const filteredSports = sportsData.filter((sport) =>
    favoris.includes(sport.sport)
  );
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      {favoris && favoris.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 7 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Favoris
          </Typography>
          <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 3 }}>
            {filteredSports.map((sport, index) => (
              <SportDetailedCard
                key={index}
                item={1}
                title={sport.sport}
                sportInfo={sport}
                isFavoris={favoris.includes(sport.sport)}
                managementFavoris={managementFavoris}
              />
            ))}
          </Box>
        </Box>
      ) : (
        <Typography variant="h4" align="center" gutterBottom>
          La liste de favoris est vide
        </Typography>
      )}
    </Box>
  );
}
