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
import { Loader } from "semantic-ui-react";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlaces();
    afficherPlaces();
  }, []);

  const getPlaces = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?offset=0&timezone=UTC&include_links=false&include_app_metas=false"
      );
      // pk places ne retourne rien
      setPlaces(response);
      setLoading(false);
      // console.log("response" + response.data);
      // console.log("places" + places);
    } catch (error) {
      console.error("Error trying to fetch locations", error);
    }
  };

  function afficherPlaces() {
    let longueur = places.length;
    if (longueur > 0) {
      return (
        console.log("pas vide"),
        console.log(places),
        console.log(longueur),
        places.map((place) => (
          <div key={place.code_site}>
            {loading ? <Loader /> : null}
            <Typography variant="body1" component="div" gutterBottom>
              {place.nom_site}
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              {place.sports}
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
              {place.start_date}
            </Typography>
            <Divider />
          </div>
        ))
      );
    } else {
      return (
        console.log("vide"),
        console.log(places),
        console.log(longueur),
        (
          <Box sx={{ flexGrow: 1, textAlign: "left" }}>
            <div style={{ height: "12vh" }}></div>
            <Typography variant="h2" component="div" gutterBottom>
              Pas de lieux
            </Typography>
          </Box>
        )
      );
    }
  }

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <div style={{ height: "12vh" }}></div>
      <Typography variant="h2" component="div" gutterBottom>
        Lieux
      </Typography>
    </Box>
  );
}
