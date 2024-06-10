import React, { useState } from "react";
import EpreuveDetails from "./EpreuveDetails";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Epreuve = ({ epreuve }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1, textAlign: "center" }}>
      <Divider />
      {epreuve.matches.map((match, index) => (
        <div key={index}>
          <CardActionArea
            sx={{ display: "flex" }}
            onClick={() => {
              setSelectedMatch(match);
              setOpen(true);
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {match.time}
                <br />
                {match.teams}
                <br />
                {match.group}
                <br />
                {match.city} - {match.stadium}
                <br />
                {match.gender}
                <br />
                {match.round}
              </Typography>
            </CardContent>
          </CardActionArea>
          {selectedMatch && (
            <EpreuveDetails match={selectedMatch} open={open} setOpen={setOpen} />
          )}
        </div>
      ))}
    </Box>
  );
};

export default Epreuve;
