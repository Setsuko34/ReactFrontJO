import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../components/Navbar";
import foot from "../assets/picture/football.png";
import programme_foot from "../assets/data/programme_foot.json";
import { Divider } from "@mui/material";

export default function Football() {
  return (
    <Box sx={{ flexGrow: 1, textAlign: "left", paddingTop: "50px" }}>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Football
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <img src={foot} alt="Football" style={{ borderRadius: "20px" }} />
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        {programme_foot.map((foot, index) => (
          <Box key={index} sx={{ textAlign: "left" }}>
            <Typography variant="h4">{foot.date}</Typography>
            <Typography variant="p">
              {foot.matches.map((match, matchIndex) => (
                <p key={matchIndex}>
                  {match.matchday} <br />
                  {match.group} <br />
                  {match.time} <br />
                  {match.city} {match.stadium} <br />
                </p>
              ))}
            </Typography>
            <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
