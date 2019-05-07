const db = require("../../data/dbConfig");

module.exports = {
  insert: team => db("teams").insert(team),
  get: id => {
    let query = db("teams");
    if (id) {
      query = db("teams").where("teams.id", id);
    }
    return query;
  },
  update: (id, team) => {
    return db("teams")
      .where("teams.id", id)
      .update(team);
  },
  remove: id => {
    return db("teams")
      .where("teams.id", id)
      .del();
  }
};
