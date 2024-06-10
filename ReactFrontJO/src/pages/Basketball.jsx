import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import basket from "../assets/picture/basketball.png";
import programme_basket from "../assets/data/programme_basket.json";
import { Divider } from "@mui/material";
import FiltreGenre from "../components/FiltreGenre";
import FiltreEpreuve from "../components/FiltreEpreuve";
import Epreuve from "../components/Epreuve";
import Box from "@mui/material/Box";

export default function Basketball() {
  const [selectedEpreuves, setselectedEpreuves] = useState([]);
  const [selectedGenres, setselectedGenres] = useState([]);

  const genre = [
    ...new Set(
      programme_basket
        .map((basket) => {
          return basket.matches.map((match) => {
            return match.gender;
          });
        })
        .flat()
    ),
  ];

  const epreuve = [
    ...new Set(
      programme_basket
        .map((basket) => {
          return basket.matches.map((match) => {
            return match.round;
          });
        })
        .flat()
    ),
  ].filter((round) => round !== undefined);

  const filteredBasket = programme_basket.filter((basket) => {
    return basket.matches.some((match) => {
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

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingY: 7 }}>
      <NavBar />
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
      {filteredBasket.map((basket, index) => (
        <Epreuve key={index} epreuve={basket} />
      ))}
      </div>
    </Box>
  );
}
