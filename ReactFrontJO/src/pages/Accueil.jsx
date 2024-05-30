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
import * as images from "../assets/picture/images.jsx";


export default function Accueil() {
  function removeAccents(str) {
    return str.normalize("NFD").replaceAll(/[\u0300-\u036f]/g, "").replaceAll(' ', '_').replace("'",'_').replace('-','_');
  }
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <div style={{ height: "12vh" }}></div>
      <Typography variant="h4" align="center" gutterBottom>
        Les Jeux Olympiques
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <Carousel autoPlay>
          {Object.keys(images).map((sport, index) => (
            <div>
              <img src={images[removeAccents(sport).toLowerCase()]} />
            </div>
          ))}
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
          <SportCard item="..." title="Voir Plus" onclick={"/disciplines"}/>
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
