import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import foot from "../assets/picture/football.png";

export default function Football() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingTop: "50px" }}>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Football
      </Typography>

      <Box sx={{ textAlign: "center" }}>
        <img src={foot} alt="Football" style={{ borderRadius: "20px" }} />
      </Box>
    </Box>
  );
}
