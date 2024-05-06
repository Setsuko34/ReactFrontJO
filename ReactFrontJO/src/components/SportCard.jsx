import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

export default function SportCard({ item, title }) {
  return (
    <Box sx={{ alignContent: "start" }}>
      <Card sx={{ maxWidth: 345, borderRadius: 6, marginBottom: "2vh" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={"https://picsum.photos/id/" + item + "/200/100"}
            alt={title}
          />
        </CardActionArea>
      </Card>
      <Typography gutterBottom variant="body2" component="div">
        {title}
      </Typography>
    </Box>
  );
}