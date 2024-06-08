import React from "react";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const FiltreEpreuve = ({ epreuves, selectedEpreuves, onEpreuveSelect }) => {
  const handleChange = (e) => {
    onEpreuveSelect(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingY: 2 }}>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel style={{ color: "white" }}>Épreuves</InputLabel>
      <Select
        key={epreuves}
        label="epreuve"
        multiple
        value={selectedEpreuves}
        onChange={handleChange}
        style={{ width: "100%", color: "white", outline: "white" }}
      >
        {epreuves.map((epreuve) => (
          <MenuItem key={epreuve} value={epreuve}>
            {epreuve}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    </Box>
  );
};

export default FiltreEpreuve;
