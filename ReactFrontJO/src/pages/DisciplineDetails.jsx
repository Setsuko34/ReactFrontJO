import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import * as images from "../assets/picture/images.jsx";
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { List, ListItem, ListItemText } from "@mui/material";
import sportsData from "../assets/data/sports.json";


export default function DisciplineDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [sportInfo, setSportInfo] = useState(null);

  // const sport = params.get("sport");


  useEffect(() => {
  const sportFind = sportsData.find((sport) => sport.sport === params.get("sport"));
  setSportInfo(sportFind);
}, [params]);
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

  return (
    <Box sx={{ flexGrow: 1, marginTop: "50px", textAlign:'left' }}>
      <NavBar />

      <Typography variant="h2" component="h1" gutterBottom>
          {sport}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Lieu : {lieu}
        </Typography>
        <Box sx={{ height: '400px', my: 2 }}>
          <MapContainer center={coordonnees_gps} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
            <Marker position={coordonnees_gps} />
          </MapContainer>
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          Dates :
        </Typography>
        <Typography variant="body1">
          Début : {new Date(dates.début).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">
          Fin : {new Date(dates.fin).toLocaleDateString()}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          Participants :
        </Typography>
        <List>
          {participants.Hommes.map((participant, index) => (
            <ListItem key={index}>
              <ListItemText primary={participant} />
            </ListItem>
          ))}
        </List>

    </Box>
  );
}
