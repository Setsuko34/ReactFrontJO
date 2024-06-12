import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from "../assets/data/sports.json";

export default function Disciplines({ favoris, managementFavoris }) {
  // Tri des sports par ordre alphabétique
  const sortedSportsData = sportsData.sort((a, b) =>
    a.sport.localeCompare(b.sport)
  );
  const [selectedSports, setSelectedSports] = React.useState(sortedSportsData);
  const selectedValues = React.useMemo(() => {
    const filteredSport = sortedSportsData.filter((v) => v.selected);
    setSelectedSports(filteredSport);
  }, [sortedSportsData]);

  useState(() => {
    setSelectedSports(sortedSportsData);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      {selectedSports && selectedSports.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 7 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Disciplines
          </Typography>
          <Autocomplete
            multiple
            id="sports-autocomplete"
            options={sortedSportsData}
            getOptionLabel={(option) => option.sport}
            value={selectedValues}
            onChange={(event, newValue) => {
              setSelectedSports(newValue);
              if (newValue.length === 0) {
                setSelectedSports(sortedSportsData);
              }
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Rechercher..." />
            )}
          />
          <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 3 }}>
            {selectedSports.map((sport) => (
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
