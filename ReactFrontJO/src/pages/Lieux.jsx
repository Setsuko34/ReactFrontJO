import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import NavBar from "../components/Navbar";
import axios from "axios";
import { Loader } from "semantic-ui-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import sportsData from "../assets/data/sports.json";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
      setLieux(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error trying to fetch locations", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1, textAlign: "left" }}>
      <NavBar />
      <Box sx={{ flexGrow: 1, textAlign: "center", marginY: 7 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Lieux
        </Typography>
        <Typography variant="p" align="center" gutterBottom>
          Voici tous les lieux qui vont accueillir les compétitions des Jeux
          Olympiques de Paris 2024.
        </Typography>
      </Box>
      {lieux.length > 0 ? (
        <>
          <Grid container spacing={2}>
            {lieux.map((place) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={`${place.code_site}-${place.start_date}`}
              >
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
                      <strong>Sport : </strong>
                      {place.sports}
                    </Typography>
                    <div style={{ marginTop: "10px" }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Date début : </strong>
                        {new Date(place.start_date).toLocaleDateString("fr-FR")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Date fin : </strong>
                        {new Date(place.end_date).toLocaleDateString("fr-FR")}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ height: "400px", my: 2 }}>
            <Typography variant="h4" align="center" gutterBottom>
              Carte
            </Typography>
            <MapContainer
              center={[48.866667, 2.333333]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {sportsData.map((sport, key) => (
                <Marker key={key} position={sport.coordonnees_gps}>
                  <Popup>
                    <strong>{sport.sport}</strong> <br /> 
                    {sport.lieu}<br />
                    {sport.dates.début} - {sport.dates.fin}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Box>
        </>
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
