import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import SportDetailedCard from "../components/SportDetailedCard";
import sportsData from '../assets/data/sports.json';
import Grid from "@mui/material/Grid";


export default function Disciplines() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <div style={{ height: "8vh" }}></div>
      <Typography variant="h4" align="center" gutterBottom>
        Disciplines
      </Typography>
      {sportsData.map((sport, key) => (
          <SportDetailedCard key={key} item={1} title={sport.sport} sportInfo={sport} />
      ))}
    </Box>
  );
}
