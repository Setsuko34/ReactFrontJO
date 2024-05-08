import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import NavBar from "../components/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SportCard from "../components/SportCard";
import { Divider } from "@mui/material";
import axios from "axios";

export default function Places() {
  
  const [places, setPlaces] = useState([]);
  const getPlaces = async () => {
    await axios
      .get(
        "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition?timezone=UTC&include_links=false&include_app_metas=false"
      )
      .then((response) => {
        // pk places ne retourne rien
        setPlaces(response.data);
        // console.log("response" + response.data);
        // console.log("places" + places);
      });
  };

  function afficherPlaces () {
    if (places) {
      return (
        console.log("pas vide"),
        console.log(places),
        places.map((place) => (
        <div key={place.dataset_id}>
          <Typography variant="body1" component="div" gutterBottom>
            {place.dataset_id}
          </Typography>
          <Divider />
        </div>
      )));
    } else {
      return (
        console.log("vide"),
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          {/* <NavBar /> */}
          <div style={{ height: "12vh" }}></div>
          <Typography variant="h2" component="div" gutterBottom>
            Pas de lieux
          </Typography>
        </Box>
      );
    }
  };

  useEffect(() => {
    getPlaces();
    afficherPlaces();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      {/* <NavBar /> */}
      <div style={{ height: "12vh" }}></div>
      <Typography variant="h2" component="div" gutterBottom>
        Lieux
      </Typography>
    </Box>
  );
}
