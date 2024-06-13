import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Grid,
  IconButton,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import sportsData from "../assets/data/sports.json";
import * as images from "../assets/picture/images.jsx";
import * as programmes from "../assets/data/programmes.jsx";
import Epreuves from "./Epreuves.jsx";

export default function DisciplineDetails({ favoris, managementFavoris }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [sportInfo, setSportInfo] = useState(null);

  useEffect(() => {
    const sportFind = sportsData.find(
      (data) => data.sport === params.get("sport")
    );
    setSportInfo(sportFind);
  }, [location.search]);

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  if (!sportInfo) {
    return <p>Chargement...</p>;
  } else {
    const isFavoris = favoris.includes(sportInfo.sport);
    return (
      <Box sx={{ flexGrow: 1, marginTop: "50px", textAlign: "left" }}>
        <NavBar />

        <Typography variant="h2" component="h2" gutterBottom>
          {sportInfo.sport}
          <IconButton
            aria-label="favorite"
            color="error"
            onClick={() => managementFavoris(sportInfo.sport)}
          >
            {isFavoris ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <br />
          <Typography variant="body1">
              {new Date(sportInfo.dates.début).toLocaleDateString()} - {new Date(sportInfo.dates.fin).toLocaleDateString()}
            </Typography>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src={images[removeAccents(sportInfo.sport).toLowerCase()]}
              alt=""
              style={{ width: "100%", imageFit: "cover" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h3">
              Description :
            </Typography>
            <Typography variant="body1" paragraph>
              {sportInfo.description}
            </Typography>
          </Grid>
        </Grid>
        {sportInfo.sport === "Football" || sportInfo.sport === "Basketball" ? (
          <Epreuves
            programme={
              programmes[
                "programme_" + removeAccents(sportInfo.sport).toLowerCase()
              ]
            }
          />
        ) : null}
        <Typography variant="h4" component="h4" gutterBottom>
          Liste des participants :
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(sportInfo.participants).map((key, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography variant="h6" component="h4" gutterBottom>
                {key}
              </Typography>
              <List>
                {sportInfo.participants[key].map((participant, index) => (
                  <ListItem key={index}>
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={participant} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" component="h2" gutterBottom>
          Lieu : {sportInfo.lieu}
        </Typography>
        <Box sx={{ height: "400px", my: 2 }}>
          <MapContainer
            center={sportInfo.coordonnees_gps}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={sportInfo.coordonnees_gps} />
          </MapContainer>
        </Box>
      </Box>
    );
  }
}
