const express = require("express");
const router = express.Router();
const teamsDb = require("../helpers/teamsDb");

// create endpoints that allow:
// create a team,
// query for teams by id, query all teams,
// query all teams ordered by name or location

// post route
router.post("/", async (req, res) => {
  const { name, location } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ error: "Name field is required, please input name." });
  }
  if (!location) {
    return res
      .status(400)
      .json({ error: "Location field is required, please input location." });
  }
  try {
    const team = await teamsDb.insert(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ error: "There was an error creating a team." });
  }
});

module.exports = router;
