import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import * as images from "../assets/picture/images.jsx";
import Box from "@mui/material/Box";

export default function SportDetailedCard({
  sportInfo,
  isFavoris,
  managementFavoris,
}) {
  const { sport, description, lieu, dates, participants } = sportInfo;

  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  return (
    <Box sx={{ display: "flex", width: "100%", marginBottom: "2vh" }}>
      <Link
        to={{
          pathname: "/disciplinedetails",
          search: `?sport=${sport}`,
        }}
      >
        <Card sx={{ borderRadius: 6 }}>
          <CardActionArea sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{
                width: 400,
                minWidth: 400,
                height: 250,
                minHeight: 250,
              }}
              image={images[removeAccents(sport).toLowerCase()]}
              alt={sport}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {sport}
              </Typography>
              <Typography variant="body2">{description}</Typography>
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
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      {/* Si on clique, on ajoute au tableau de favoris et on met l'icone plein */}
      {/* Pour vérifier si on met l'icone plein ou vide, on check si le sport est déjà dans le tableau, comme fait dans le composant favoris */}
      <IconButton
        aria-label="favorite"
        color="error"
        onClick={() => managementFavoris(sport)}
      >
        {isFavoris ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Snackbar open={isFavoris} autoHideDuration={4000}>
        <Alert severity="success">Favoris Ajouté avec Succée</Alert>
      </Snackbar>
    </Box>
  );
}
