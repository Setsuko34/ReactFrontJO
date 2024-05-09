import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";

export default function Basketball() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Basketball
      </Typography>
      {/* Rest of the code */}
    </Box>
  );
}
