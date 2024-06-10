import React from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Box from "@mui/material/Box";

const FiltreEpreuve = ({ epreuves, selectedEpreuves, onEpreuveSelect }) => {
  const handleChange = (e) => {
    onEpreuveSelect(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel>Épreuves</InputLabel>
        <Select
          key={epreuves}
          label="epreuve"
          multiple
          value={selectedEpreuves}
          onChange={handleChange}
          style={{ width: "100%" }}
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
