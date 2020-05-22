const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/api/sites", async (req, res) => {

  try {
    const response = await fetch("http://aimtell.com/files/sites.json");
    const { sites } = await response.json();
    return res.json(sites);
  } catch (e) {
    console.log(e.message);
    return res.status(502).json({ msg: "Could not retrieve data, please try again." });
  }

});

module.exports = router;