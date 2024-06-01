import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import * as images from "../assets/picture/images.jsx";

export default function SportDetailedCard({ item, sportInfo }) {
  const { sport, description, lieu, dates, participants, coordonnees_gps } =
    sportInfo;

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  return (
    <Link
      to={{
        pathname: "/disciplinedetails",
        search: `?sport=${sport}`,
      }}
      style={{ textDecoration: "none" }}
    >
      <Box sx={{ display: "flex", width: "100%", marginBottom: "2vh" }}>
        <Card sx={{ borderRadius: 6 }}>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{
                width: 400,
                imageFit: "cover",
                height: "100%",
                margin: "auto",
              }}
              image={images[removeAccents(sport).toLowerCase()]}
              alt={sport}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {sport}
              </Typography>
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
          </CardActionArea>
        </Card>
      </Box>
    </Link>
  );
}
