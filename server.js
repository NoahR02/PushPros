const express = require("express");
const app = express();
const PORT = 3000;

// Middleware Imports
const bodyParser = require("body-parser");

// Route Imports
const sites = require("./api/sites.js");
const home = require("./routes/home.js");

// Use Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

// Set Rendering Engine
app.set("view engine", "ejs");

// Use API routes
app.use(sites);

// Use View Routes
app.use(home);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Connected on port ${PORT}`);
});