const db = require("../../data/dbConfig");

module.exports = {
  insert: player => db("players").insert(player),
  get: id => {
    let query = db("players");
    if (id) {
      query = db("players").where("players.id", id);
    }
    return query;
  },
  update: (id, player) => {
    return db("players")
      .where("players.id", id)
      .update(player);
  },
  remove: id => {
    return db("players")
      .where("players.id", id)
      .del();
  }
};
