import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NavBar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Accueil() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />

      <Typography variant="h2" component="div" gutterBottom>
        Nos Jeux Olympiques
      </Typography>
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

      <Typography variant="h2" component="div" gutterBottom>
        Les Disciplines
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Football
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Basket
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Natation
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Athlétisme
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="primary">
            Handball
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
