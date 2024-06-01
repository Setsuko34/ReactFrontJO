import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardMedia } from "@mui/material";
import * as images from "../assets/picture/images.jsx";

export default function DisciplineDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const sport = params.get("sport");
  const description = params.get("description");
  const lieu = params.get("lieu");
  const dates = params.get("dates");
  const participants = params.get("participants");

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  console.log(dates);
  console.log(dates.début);
  console.log(dates.fin);
  return (
    <Box sx={{ display: "flex", width: "100%", marginTop: "50px" }}>
      <NavBar />
      <Card sx={{ borderRadius: 6 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {sport}
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 400, imageFit: "cover", height: "100%" }}
              image={images[removeAccents(sport).toLowerCase()]}
              alt={sport}
            />
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              sx={{ marginTop: "1vh" }}
            >
              <strong>Lieu :</strong> {lieu}
            </Typography>
            <Typography variant="body2" color="text.primary">
              <strong>Dates :</strong> {dates.début} - {dates.fin}
            </Typography>
            <Typography variant="body2" color="text.primary">
              <strong>Participants :</strong> {participants.length}
            </Typography>
          </CardContent>
      </Card>
    </Box>
  );
}
