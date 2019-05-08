exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("teams")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("teams").insert([
        { id: 1, name: "Warriors", location: "Oakland", count: 6 },
        { id: 2, name: "Rockets", location: "Houston", count: 5 },
        { id: 3, name: "Celtics", location: "Boston", count: 7 },
        { id: 4, name: "Bucks", location: "Milwaukee", count: 4 },
        { id: 5, name: "76ers", location: "Philadelphia", count: 4 },
        { id: 6, name: "Raptors", location: "Toronto", count: 6 },
        { id: 7, name: "Nuggets", location: "Denver", count: 4 },
        { id: 8, name: "Trail Blazers", location: "Portland", count: 4 }
      ]);
    });
};
