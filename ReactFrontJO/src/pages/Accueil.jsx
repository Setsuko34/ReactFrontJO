import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NavBar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SportCard from "../components/SportCard";
import { Divider } from "@mui/material";

export default function Accueil() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <div style={{ height: "12vh" }}></div>
      <Typography variant="h4" align="center" gutterBottom>
        Les Jeux Olympiques
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Carousel autoPlay>
          <div>
            <img src="https://picsum.photos/id/237/1600/800/" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/243/1600/800/" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/257/1600/800/" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/200/1600/800/" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Les disciplines
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <SportCard item="237" title="Football" />
        </Grid>
        <Grid item xs={4}>
          <SportCard item="11" title="Basket" />
        </Grid>
        <Grid item xs={4}>
          <SportCard item="257" title="Natation" />
        </Grid>
        <Grid item xs={4}>
          <SportCard item="200" title="Athlétisme" />
        </Grid>
        <Grid item xs={4}>
          <SportCard item="201" title="Rugby" />
        </Grid>
        <Grid item xs={4}>
          <SportCard item="504" title="Judo" />
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: "4vh",
          paddingY: "4vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "3px solid black",
        }}
      >
        <Button variant="contained" color="primary">
          Voir toutes les disciplines
        </Button>
      </Box>
    </Box>
  );
}
