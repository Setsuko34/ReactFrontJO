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
      <Typography variant="h2" component="div" gutterBottom>
        Nos Jeux Olympiques
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Carousel autoPlay>
          <div>
            <img src="https://picsum.photos/id/237/200/100/" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/243/200/100" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/257/200/100" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="https://picsum.photos/id/200/200/100" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </Box>

      <Typography variant="h2" component="div" gutterBottom>
        Les Disciplines
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
      </Grid>

      <Box
        sx={{
          marginTop: "14vh",
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
