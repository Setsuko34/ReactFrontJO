import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";

export default function Football() {
    return (
        <Box>
          <NavBar />
          <Typography variant="h4" align="center" gutterBottom>
            Football
          </Typography>
          {/* Rest of the code */}
        </Box>
  );
}
