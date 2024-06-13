import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EpreuveDetails = ({ match, open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          align="center"
        >
          Informations sur l'épreuve
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {match.time}
          <br />
          {match.teams &&
            match.teams.map((team, index) => (
              <React.Fragment key={index}>
                {team}
                {index !== match.teams.length - 1 && " - "}
              </React.Fragment>
            ))}
          <br />
          {match.group}
          <br />
          {match.city} - {match.stadium}
          <br />
          {match.gender}
          <br />
          {match.round}
        </Typography>
      </Box>
    </Modal>
  );
};

export default EpreuveDetails;
