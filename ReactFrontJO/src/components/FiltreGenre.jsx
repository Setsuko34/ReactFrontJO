import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";

const FiltreGenre = ({ genres, selectedGenres, onGenreSelect }) => {
  const handleChange = (e) => {
    onGenreSelect(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Genres</InputLabel>
        <Select
          key={genres}
          label="Genre"
          multiple
          value={selectedGenres}
          onChange={handleChange}
          style={{ width: "100%" }}
        >
          {genres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              {genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FiltreGenre;
