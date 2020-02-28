/* Entry Point of Program */

/**
 * Library Imports
 */
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

/**
 * App Constants
 */
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * App middlewares
 */
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/resources')));

/**
 * Main Route
 */
app.get('/', function(req, res) {
    res.contentType("text/html");
    res.sendFile('resources/index.html');
});

app.listen(PORT, function() {
    console.log(`Listening :${PORT}`);
});