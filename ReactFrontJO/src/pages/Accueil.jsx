import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NavBar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SportCard from "../components/SportCard";
import * as images from "../assets/picture/images.jsx";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Accueil() {
  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", marginY: 7, padding: 3 }}>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Les Jeux Olympiques
      </Typography>
      <Box sx={{ flexGrow: 1, textAlign: "center", marginY: 2 }}>
        <Carousel autoPlay>
          {Object.keys(images)
            // Affichage des images de manière aléatoire pour plus de dynamisme
            .sort(() => Math.random() - 0.5)
            .map((sport, index) => (
              <div key={index}>
                <img
                  src={images[removeAccents(sport).toLowerCase()]}
                  style={{ maxWidth: "80%", height: "auto" }}
                />
              </div>
            ))}
        </Carousel>
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Les disciplines
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard
            item="Football"
            title="Football"
            onclick={{
              pathname: "/disciplinedetails",
              search: `?sport=Football`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard
            item="Basketball"
            title="Basket"
            onclick={{
              pathname: "/disciplinedetails",
              search: `?sport=Basketball`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard
            item="Natation"
            title="Natation"
            onclick={{
              pathname: "/disciplinedetails",
              search: `?sport=Natation`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard
            item="Athlétisme"
            title="Athlétisme"
            onclick={{
              pathname: "/disciplinedetails",
              search: `?sport=Athlétisme`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard
            item="Rugby"
            title="Rugby"
            onclick={{ pathname: "/disciplinedetails", search: `?sport=Rugby` }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SportCard item="more" title="Toutes les épreuves" onclick={"/disciplines"} />
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
        <Link to="/disciplines">
          <Button variant="contained" color="primary">
            Voir toutes les disciplines
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
