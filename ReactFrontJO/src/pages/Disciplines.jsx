import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from "../assets/data/sports.json";

export default function Disciplines({favoris, setFavoris}) {
  const managementFavoris = (event) => {
    if (!favoris.includes(event)) {
      setFavoris([...favoris, event]);
    } else {
      setFavoris(favoris.filter((item) => item !== event));
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <div style={{ height: "8vh" }}></div>
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
  );
}
