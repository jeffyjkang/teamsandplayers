const express = require("express");
const router = express.Router();
const playersDb = require("../helpers/playersDb");
//
const teamsDb = require("../helpers/teamsDb");

// create endpoints that allow:
// create a player
// query for players by id, query all players,
// query all players matching a given last name
// query all players on a team
// add or remove a player from a team

// post route
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

// get route
// get all
router.get("/", async (req, res) => {
  try {
    const players = await playersDb.get();
    res.status(200).json(players);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error retrieving the players." });
  }
});
// get all players matching last name
router.get("/match/:lName", async (req, res) => {
  const lName = req.params.lName;
  try {
    const players = await playersDb.get().where("lastName", lName);
    res.status(200).json(players);
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error retrieving the players." });
  }
});
// get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const player = await playersDb.get(id).first();
    if (!player) {
      res
        .status(404)
        .json({ error: "The player with the specified id does not exist." });
    } else {
      res.status(200).json(player);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error retrieving the player." });
  }
});

// put route
// add player to a team
router.put("/add/:id", async (req, res) => {
  const id = req.params.id;
  const { teamId } = req.body;
  try {
    const player = await playersDb.get(id).first();
    const teams = await teamsDb.get();
    if (!teamId) {
      res
        .status(400)
        .json({ error: "Team id is required, please input team id." });
    } else if (
      teamId < 1 ||
      teamId > teams.length ||
      typeof teamId != "number"
    ) {
      res.status(400).json({ error: "Please input valid team id." });
    } else if (!player) {
      res
        .status(404)
        .json({ error: "The player with the specified id does not exist." });
    } else if (player.teamId !== null) {
      res.status(400).json({
        error: "The player is still under contract, remove from team."
      });
    } else {
      const team = await teamsDb.get(teamId).first();
      if (team.count >= 8) {
        res.status(400).json({
          error:
            "The capacity of players allowed on this team has been reached, please remove a player first."
        });
      } else {
        let count = ++team.count;
        const uTeam = await teamsDb.update(teamId, { ...team, count });
        const uPlayer = await playersDb.update(id, { ...player, teamId });
        res.status(200).json({ message: "Player has been added to the team." });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error adding the player to a team." });
  }
});
//remove player from a team
router.put("/remove/:id", async (req, res) => {
  const id = req.params.id;
  // const { firstName, lastName, teamId } = req.body;
  try {
    const player = await playersDb.get(id).first();
    if (!player) {
      res
        .status(404)
        .json({ error: "The player with the specified id does not exist." });
    } else {
      if (player.teamId === null) {
        res.status(200).json({ message: "Player is already a free agent." });
      } else {
        const team = await teamsDb.get(player.teamId).first();
        let count = --team.count;
        let teamId = null;
        const uTeam = await teamsDb.update(team.id, { ...team, count });
        const uPlayer = await playersDb.update(id, { ...player, teamId });
        res
          .status(200)
          .json({ message: "Player has been removed from the team." });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "There was an error removing the player from a team." });
  }
});

module.exports = router;
