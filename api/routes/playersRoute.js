const express = require("express");
const router = express.Router();
const playersDb = require("../helpers/playersDb");

// create endpoints that allow:
// create a player
// query for players by id, query all players,
// query all players matching a given last name
// query all players on a team
// add or remove a player from a team

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  if (!firstName) {
    return res
      .status(400)
      .json({ error: "First name is required, please input first name." });
  }
  if (!lastName) {
    return res
      .status(400)
      .json({ error: "Last name is required, please input last name." });
  }
  try {
    const player = await playersDb.insert(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: "There was an error creating a player." });
  }
});

module.exports = router;
