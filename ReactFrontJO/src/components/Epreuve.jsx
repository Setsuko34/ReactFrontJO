import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";

const Epreuve = ({ epreuve }) => {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingY: 2 }}>
      <Card variant="outlined" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {epreuve.date}
          </Typography>
          {epreuve.matches.map((match, index) => (
            <div key={index}>
            <Typography variant="p" component="div">
              {match.time}
            </Typography>
              <Typography variant="p" component="div">
                {match.teams} / {match.group}
              </Typography>
              <Typography variant="p" component="div">
                {match.city} - {match.stadium}
              </Typography>
              <Typography variant="p" component="div">
                {match.gender}
              </Typography>
              <Typography variant="p" component="div">
                {match.round}
              </Typography>
              <Divider />
            </div>
          ))}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Epreuve;
