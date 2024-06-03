import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";

export default function Favoris({ favoris }) {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      {favoris && favoris.length > 0 ? (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          {favoris.map((event, index) => (
            <Typography key={index}>{event}</Typography>
          ))}
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Typography variant="h4" align="center" gutterBottom>
            La liste de favoris est vide
          </Typography>
        </Box>
      )}
    </Box>
  );
}
