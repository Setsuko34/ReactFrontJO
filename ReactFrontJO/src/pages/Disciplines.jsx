import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from "../assets/data/sports.json";

export default function Disciplines({ favoris, managementFavoris }) {
  // Tri des sports par ordre alphabétique
  const sortedSportsData = sportsData.sort((a, b) => a.sport.localeCompare(b.sport));

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left"}}>
      <NavBar />
      {sortedSportsData && sortedSportsData.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 7 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Disciplines
          </Typography>
          <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 3 }}>
            {sortedSportsData.map((sport) => (
              <SportDetailedCard
                key={sport.sport}
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
          Chargement des disciplines...
        </Typography>
      )}
    </Box>
  );
}
