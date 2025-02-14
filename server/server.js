const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Erlaubt Anfragen vom React-Frontend
app.use(express.json());

app.get("/projects", (req, res) => {
    fs.readFile("./data/projects.json", "utf8", (err, data) => {
        if(err) {
            return res.status(500).json({message: "Fehler beim Lesen der Datei"});
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));