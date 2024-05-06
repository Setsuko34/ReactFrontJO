import React, { useState } from 'react';

const Profil = () => {
    // Initial user data
    const initialUser = {
        pseudo: 'johndoe',
        nom: 'Doe',
        prenom: 'John',
        email: 'johndoe@example.com'
    };

    // State to hold the user data
    const [user, setUser] = useState(initialUser);

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    // Function to handle save button click
    const handleSave = () => {
        // Perform save operation here
        console.log("Saving user data:", user);
        // Reset the form
        setUser(user);
    };

    return (
        <div>
            <h1>Profil</h1>
            <p>Pseudo: <input type="text" name="pseudo" value={user.pseudo} onChange={handleInputChange} /></p>
            <p>Nom: <input type="text" name="nom" value={user.nom} onChange={handleInputChange} /></p>
            <p>Prénom: <input type="text" name="prenom" value={user.prenom} onChange={handleInputChange} /></p>
            <p>Email: <input type="text" name="email" value={user.email} onChange={handleInputChange} /></p>
            <p>
                <button onClick={handleSave}>Sauvegarder</button>
            </p>
        </div>
    );
};

export default Profil;