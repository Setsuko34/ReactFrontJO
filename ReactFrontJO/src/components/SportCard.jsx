import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function SportCard({ item, title, onclick }) {
  return (
    <Link to={onclick}>
    <Box sx={{ alignContent: "start" }}>
      <Card sx={{ maxWidth: 345, borderRadius: 6, marginBottom: "2vh" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"https://picsum.photos/id/" + item + "/2000/1000"}
            alt={title}
          />
        </CardActionArea>
      </Card>
      <Typography gutterBottom variant="body2" component="div">
        {title}
      </Typography>
    </Box>
    </Link>
  );
}
