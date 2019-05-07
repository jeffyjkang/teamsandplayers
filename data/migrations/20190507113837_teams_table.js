// team contains id, name, location, list of players on the team
// no two teams should exist with the same name and location
// team should have a maximum of 8 players
// name and location are required fields
exports.up = function(knex, Promise) {
  return knex.schema.createTable("teams", teams => {
    teams.increments("id").primary();
    teams
      .string("name")
      .unique()
      .notNullable();
    teams
      .string("location")
      .unique()
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teams");
};
