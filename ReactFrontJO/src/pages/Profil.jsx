import React, { useState } from "react";
import NavBar from "../components/Navbar";
import { TextField, Button, Snackbar, Alert, Typography } from "@mui/material";

const Profil = () => {
  const initialUser = {
    pseudo: "johndoe",
    nom: "Doe",
    prenom: "John",
    email: "johndoe@example.com",
  };

  const [user, setUser] = useState(initialUser);
  const [isSaved, setIsSaved] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving user data:", user);
    setIsSaved(true);
    setUser(user);
  };

  return (
    <div>
      <NavBar />
      <Typography variant="h4" align="center" gutterBottom>
        Profil
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Pseudo"
          name="pseudo"
          value={user.pseudo}
          onChange={handleInputChange}
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Nom"
          name="nom"
          value={user.nom}
          onChange={handleInputChange}
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Prénom"
          name="prenom"
          value={user.prenom}
          onChange={handleInputChange}
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          style={{ marginBottom: 20 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Sauvegarder
        </Button>
        <Snackbar
          open={isSaved}
          autoHideDuration={4000}
          onClose={() => setIsSaved(false)}
        >
          <Alert severity="success">
            Données sauvegardées (visible dans la console)
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default Profil;
