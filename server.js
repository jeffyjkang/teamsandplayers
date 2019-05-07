const express = require("express");
const server = express();
const teams = require("./api/routes/teamsRoute");
const players = require("./api/routes/playersRoute");
server.use(express.json());
server.use("/teams", teams);
server.use("/players", players);
server.get("/", (req, res) => {
  res.send("<h1>Server Running<h1>");
});
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));
module.exports = { server };
