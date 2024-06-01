import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import basket from "../assets/picture/basketball.png";

export default function Basketball() {
  return (
    <Box sx={{ textAlign: "left", paddingTop: "50px" }}>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Basketball
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <img
          src={basket}
          alt="Basketball"
          style={{ borderRadius: "20px" }}
        />
      </Box>
    </Box>
  );
}
