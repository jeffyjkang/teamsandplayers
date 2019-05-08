const express = require("express");
const router = express.Router();
const teamsDb = require("../helpers/teamsDb");
//
const playersDb = require("../helpers/playersDb");

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

// get route
// get all
router.get("/", async (req, res) => {
  try {
    const teams = await teamsDb.get();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the teams." });
  }
});
// get all teams ordered by name ascending
router.get("/name_asc", async (req, res) => {
  try {
    const teams = await teamsDb.get().orderBy("name", "asc");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the teams." });
  }
});
// get all teams ordered by name descending
router.get("/name_desc", async (req, res) => {
  try {
    const teams = await teamsDb.get().orderBy("name", "desc");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the teams." });
  }
});
// get all teams ordered by location ascending
router.get("/loc_asc", async (req, res) => {
  try {
    const teams = await teamsDb.get().orderBy("location", "asc");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the teams." });
  }
});
// get all teams ordered by location descending
router.get("/loc_desc", async (req, res) => {
  try {
    const teams = await teamsDb.get().orderBy("location", "desc");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the teams." });
  }
});
// get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const team = await teamsDb.get(id).first();
    if (!team) {
      res
        .status(404)
        .json({ error: "The team with the specified id does not exist." });
    } else {
      res.status(200).json(team);
    }
  } catch (error) {
    res.status(500).json({ error: "There was an error retrieving the team." });
  }
});
// get all players in a team by team id
router.get("/players/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const team = await teamsDb.get(id).first();
    if (!team) {
      res
        .status(404)
        .json({ error: "The team with the specified id does not exist." });
    } else {
      const players = await playersDb.get().where("teamId", id);
      team.players = players;
      res.status(200).json(team);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error retrieving the team and players." });
  }
});

module.exports = router;
