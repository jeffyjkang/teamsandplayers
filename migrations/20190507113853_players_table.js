// player contains id, first name, last name
// player can only be on one team
// first name, last name are required fields
exports.up = function(knex, Promise) {
  return knex.schema.createTable("players", players => {
    players.increments("id").primary();
    players.string("firstName").required();
    players.string("lastName").required();
    players.integer("teamId").references("teams.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("players");
};
