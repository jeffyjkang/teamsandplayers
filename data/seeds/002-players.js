exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("players")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("players").insert([
        { id: 1, firstName: "Jimmy", lastName: "Butler", teamId: 5 },
        { id: 2, firstName: "Marc", lastName: "Gasol", teamId: 6 },
        { id: 3, firstName: "Clint", lastName: "Capela", teamId: 2 },
        { id: 4, firstName: "Gordon", lastName: "Hayward", teamId: 3 },
        { id: 5, firstName: "Ben", lastName: "Simmons", teamId: 5 },
        { id: 6, firstName: "Danny", lastName: "Green", teamId: 6 },
        { id: 7, firstName: "James", lastName: "Harden", teamId: 2 },
        { id: 8, firstName: "Kawhi", lastName: "Leonard", teamId: 6 },
        { id: 9, firstName: "Kyrie", lastName: "Irving", teamId: 3 },
        { id: 10, firstName: "DeMarcus", lastName: "Cousins", teamId: 1 },
        { id: 11, firstName: "PJ", lastName: "Tucker", teamId: 2 },
        { id: 12, firstName: "JJ", lastName: "Redick", teamId: 5 },
        { id: 13, firstName: "Eric", lastName: "Bledsoe", teamId: 4 },
        { id: 14, firstName: "Stephen", lastName: "Curry", teamId: 1 },
        { id: 15, firstName: "George", lastName: "Hill", teamId: 4 },
        { id: 16, firstName: "Kyle", lastName: "Lowry", teamId: 6 },
        { id: 17, firstName: "Enes", lastName: "Kanter", teamId: 8 },
        { id: 18, firstName: "Kevin", lastName: "Durrant", teamId: 1 },
        { id: 19, firstName: "Chris", lastName: "Paul", teamId: 2 },
        { id: 20, firstName: "Joel", lastName: "Embiid", teamId: 5 },
        { id: 21, firstName: "Jaylen", lastName: "Brown", teamId: 3 },
        { id: 22, firstName: "CJ", lastName: "McCollum", teamId: 8 },
        { id: 23, firstName: "Serge", lastName: "Ibaka", teamId: 6 },
        { id: 24, firstName: "Marcus", lastName: "Morris", teamId: 3 },
        { id: 25, firstName: "Khris", lastName: "Middleton", teamId: 4 },
        { id: 26, firstName: "Nikola", lastName: "Jokic", teamId: 7 },
        { id: 27, firstName: "Al", lastName: "Horford", teamId: 3 },
        { id: 28, firstName: "Jeremy", lastName: "Lin", teamId: 6 },
        { id: 29, firstName: "RJ", lastName: "Hunter", teamId: 3 },
        { id: 30, firstName: "Jayson", lastName: "Tatum", teamId: 3 },
        { id: 31, firstName: "Giannis", lastName: "Antetokounmpo", teamId: 4 },
        { id: 32, firstName: "Damian", lastName: "Lillard", teamId: 8 },
        { id: 33, firstName: "Gary", lastName: "Harris", teamId: 7 },
        { id: 34, firstName: "Jamal", lastName: "Murray", teamId: 7 },
        { id: 35, firstName: "Eric", lastName: "Gordon", teamId: 2 },
        { id: 36, firstName: "Draymond", lastName: "Green", teamId: 1 },
        { id: 37, firstName: "Klay", lastName: "Thompson", teamId: 1 },
        { id: 38, firstName: "Al", lastName: "Aminu", teamId: 8 },
        { id: 39, firstName: "Andre", lastName: "Iguodala", teamId: 1 },
        { id: 40, firstName: "Paul", lastName: "Millsap", teamId: 7 }
      ]);
    });
};
