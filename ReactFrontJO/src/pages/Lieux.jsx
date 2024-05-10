import React, { useEffect, useState } from "react";
import {
  Divider,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import NavBar from "../components/Navbar";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import Button from "@mui/material/Button";
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
    <Box sx={{ flexGrow: 1, textAlign: "left", marginTop: 10 }}>
      <NavBar />
      {lieux.length > 0 ? (
        <Grid container spacing={2}>
          {lieux.map((place) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={place.code_site}>
              {loading ? <Loader /> : null}
              <Card
                sx={{
                  height: "100%",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {place.nom_site}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sport : {place.sports}
                  </Typography>
                  <div style={{ marginTop: "10px" }}>
                    <Typography variant="body2" color="text.secondary">
                      Date : {new Date(place.start_date).toLocaleDateString("fr-FR")}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Chargement des lieux...
          </Typography>
        </Box>
      )}
    </Box>
  );
}
