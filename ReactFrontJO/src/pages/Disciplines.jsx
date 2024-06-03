import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from "../assets/data/sports.json";

export default function Disciplines({ favoris, managementFavoris }) {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 5  }}>
      <NavBar />
      {sportsData && sportsData.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Disciplines
          </Typography>
          {sportsData.map((sport, key) => (
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
      ) : (
        <Typography variant="h4" align="center" gutterBottom>
          Chargement des disciplines...
        </Typography>
      )}
    </Box>
  );
}
