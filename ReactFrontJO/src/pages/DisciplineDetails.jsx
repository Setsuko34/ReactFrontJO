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
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import sportsData from "../assets/data/sports.json";
import Person from "@mui/icons-material/Person";
import * as images from "../assets/picture/images.jsx";

export default function DisciplineDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [sportInfo, setSportInfo] = useState(null);

  // const sport = params.get("sport");

  useEffect(() => {
    const sportFind = sportsData.find(
      (data) => data.sport === params.get("sport")
    );
    setSportInfo(sportFind);
  }, []);
  // const sport = params.get("sport");
  // const description = params.get("description");
  // const lieu = params.get("lieu");
  // const dates = params.get("dates");
  // const participants = params.get("participants");
  // const coordonnees_gps = params.get("coordonnees_gps").split(',');
  // const coords = [coordonnees_gps.lat, coordonnees_gps.lon];

  console.log(sportInfo);

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  // console.log(dates);
  //  console.log( participants);

  if (!sportInfo) {
    return <p>Loading...</p>;
  } else {
    return (
      <Box sx={{ flexGrow: 1, marginTop: "50px", textAlign: "left" }}>
        <NavBar />

        <Typography variant="h2" component="h1" gutterBottom>
          {sportInfo.sport}
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

        <Typography variant="h5" component="h3" gutterBottom>
          Dates :
        </Typography>
        <Typography variant="body1">
          Début : {new Date(sportInfo.dates.début).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">
          Fin : {new Date(sportInfo.dates.fin).toLocaleDateString()}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Liste des Participants :
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
