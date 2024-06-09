import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import * as images from "../assets/picture/images.jsx";
import Box from "@mui/material/Box";

export default function SportCard({ item, title, onclick }) {
  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replaceAll(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "_")
      .replace("'", "_")
      .replace("-", "_");
  }

  return (
    <Link to={onclick}>
      <Box sx={{ alignContent: "start" }}>
        <Card
          sx={{
            maxWidth: 345,
            borderRadius: 6,
            marginBottom: "2vh",
            position: "relative",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={images[removeAccents(item).toLowerCase()]}
              alt={title}
            />
          </CardActionArea>
          <CardHeader
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              position: "absolute",
              bottom: 0,
              width: "100%",
            }}
            title={
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  color: "#fff", // White text
                }}
              >
                {title}
              </Typography>
            }
          />
        </Card>
      </Box>
    </Link>
  );
}
