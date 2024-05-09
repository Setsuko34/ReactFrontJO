import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";

export default function Favoris() {
    return (
        <Box>
          <NavBar />
          <Typography variant="h4" align="center" gutterBottom>
            Favoris
          </Typography>
          {/* Rest of the code */}
        </Box>
  );
}
