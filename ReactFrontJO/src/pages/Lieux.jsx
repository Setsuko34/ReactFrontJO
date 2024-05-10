import React, { useEffect, useState } from "react";
import { Divider, Box, Typography } from "@mui/material";
import NavBar from "../components/Navbar";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SportCard from "../components/SportCard";

export default function Lieux() {
  const [lieux, setLieux] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLieux();
  }, []);

  const getLieux = async () => {
    try {
      const response = await axios.get(
        "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?offset=0&timezone=UTC&include_links=false&include_app_metas=false"
      );
      // pk lieux ne contient rien
      setLieux(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error trying to fetch locations", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      {lieux.length > 0
        ? (lieux.map((place) => (
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
        ) : (
          (
            <Box sx={{ flexGrow: 1, textAlign: "left" }}>
              <Typography variant="h4" align="center" gutterBottom>
                Chargement des lieux...
              </Typography>
            </Box>
          ))}
    </Box>
  );
}
