import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import FiltreGenre from "../components/FiltreGenre";
import FiltreEpreuve from "../components/FiltreEpreuve";
import Epreuve from "../components/Epreuve";
import Box from "@mui/material/Box";

export default function Epreuves(programme) {
  const [selectedEpreuves, setselectedEpreuves] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([]);
  {
    programme = programme.programme;
  }
  const genre = [
    ...new Set(
      programme
        .map((epreuves) => {
          return epreuves.matches.map((match) => {
            return match.gender;
          });
        })
        .flat()
    ),
  ];

  const epreuve = [
    ...new Set(
      programme
        .map((epreuves) => {
          return epreuves.matches.map((match) => {
            return match.round;
          });
        })
        .flat()
    ),
  ].filter((round) => round !== undefined);

  const filteredepreuves = programme.filter((epreuves) => {
    return epreuves.matches.some((match) => {
      return (
        (selectedEpreuves.length === 0 ||
          selectedEpreuves.includes(match.round)) &&
        (selectedGenres.length === 0 || selectedGenres.includes(match.gender))
      );
    });
  });

  const handleEpreuveSelect = (selectedOption) => {
    setselectedEpreuves(selectedOption);
  };

  const handleGenreChange = (selectedOption) => {
    setselectedGenres(selectedOption);
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingTop: 7 }}>
      <Typography variant="h4">Listes des Matchs :</Typography>
      <div className="filtres">
        <FiltreEpreuve
          epreuves={epreuve}
          selectedEpreuves={selectedEpreuves}
          onEpreuveSelect={handleEpreuveSelect}
        />
        <FiltreGenre
          genres={genre}
          selectedGenres={selectedGenres}
          onGenreSelect={handleGenreChange}
        />
      </div>
      <div className="epreuves-list">
        {filteredepreuves.map((epreuves, index) => (
          <div key={index}>
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              <Card variant="outlined" sx={{ minWidth: 275, borderRadius: 5 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  paddingTop={1}
                >
                  {epreuves.date}
                </Typography>
                <Epreuve key={index} epreuve={epreuves} />
              </Card>
            </Box>
          </div>
        ))}
      </div>
    </Box>
  );
}
