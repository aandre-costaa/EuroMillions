// import { generateRandomKey } from "./keyScript.js";

const keyScript = require("./keyScript.js");
const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const host = 'localhost';
const port = 8000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'Client')));

app.get('/generate-key', (req, res) => {
    res.json(keyScript.generateRandomKey());
});


app.listen(port, () => {
    console.log(`Server is running on http://${host}:${port}`);
});