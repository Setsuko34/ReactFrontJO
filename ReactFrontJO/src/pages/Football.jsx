import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import foot from "../assets/picture/football.png";
import programme_foot from "../assets/data/programme_foot.json";
import { Divider } from "@mui/material";
import FiltreGenre from "../components/FiltreGenre";
import FiltreEpreuve from "../components/FiltreEpreuve";
import Epreuve from "../components/Epreuve";

export default function Football() {
  const [selectedEpreuves, setselectedEpreuves] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([]);

  const genre = [
    ...new Set(
      programme_foot
        .map((foot) => {
          return foot.matches.map((match) => {
            return match.gender;
          });
        })
        .flat()
    ),
  ];

  const epreuve = [
    ...new Set(
      programme_foot
        .map((foot) => {
          return foot.matches.map((match) => {
            return match.round;
          });
        })
        .flat()
    ),
  ].filter((round) => round !== undefined);

  const filteredFoot = programme_foot.filter((foot) => {
    return foot.matches.some((match) => {
      return (
        (selectedEpreuves.length === 0 || selectedEpreuves.includes(match.round)) &&
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


  console.log(typeof(selectedGenres));
  console.log(typeof(selectedEpreuves));
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingY: 7 }}>
      <NavBar />
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
      {filteredFoot.map((foot, index) => (
        <Epreuve key={index} epreuve={foot} />
      ))}
    </Box>
  );
}
