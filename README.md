# Teams and Players

## API for teams and players

### Assessment:

- Set up a web API project to interact with a database containing Teams and Players.

### Guidelines:

- Create an entity framework DbContext that models Team and Player objects.

**Team Guidelines**

1. A Team should contain an ID, a Name, a Location, and a List of Players on the team.
2. No two Teams should exist with the same Name and Location
3. A Team should have a maximum of 8 Players
4. Name and Location are required fields

**Player Guidelines**

1. A Player should contain an ID, a FirstName, and a LastName.
2. A Player can only be on one Team
3. First Name, and Last Name are required fields

**Create endpoints that allow us to:**

- [x] Create a Team
- [x] Create a Player
- [x] Add or Remove a Player from a Team
- [x] Query for Players
- [x] Query by ID
- [x] Query All Players
- [x] Query All Players matching a given Last Name
- [x] Query for all Players on a Team
- [x] Query for Teams
- [x] Query by ID
- [x] Query All Teams
- [x] Query All Teams ordered by Name or Location

_For example, we should be able to:_
_Send a POST request containing a Player object to http://localhost:5000/Players and create a new Player_
_Send a GET request to http://localhost:5000/Teams?orderBy=name and see all teams ordered by their name (sorted alphabetically)_

### Initializing

1. From the root directory:

- yarn i
- knex migrate:latest
- knex seed:run

## To run api

1. Development testing:

- yarn test

2. Development Nodemon:

- yarn server

3. Start server:

- yarn start

## Endpoints

### Team Endpoints

| Method   | Path                 | Description                                                                                     |
| -------- | -------------------- | ----------------------------------------------------------------------------------------------- |
| **POST** | `/teams`             | Creates a `team`, expects object, fields: `name` and `location` required.                       |
| **GET**  | `/teams`             | Retrieves `all` existing `teams` in the database.                                               |
| **GET**  | `/teams/name_asc`    | Retrieves `all` existing `teams` in the database, `names` are sorted in `ascending` order.      |
| **GET**  | `/teams/name_desc`   | Retrieves `all` existing `teams` in the database, `names` are sorted in `descending` order.     |
| **GET**  | `/teams/loc_asc`     | Retrieves `all` existing `teams` in the database, `locations` are sorted in `ascending` order.  |
| **GET**  | `/teams/loc_desc`    | Retrieves `all` existing `teams` in the database, `locations` are sorted in `descending` order. |
| **GET**  | `/teams/:id`         | Retrieves a single `team` by team's `id`, through `params.id`.                                  |
| **GET**  | `/teams/players/:id` | Retrieves `all players` associated to the team by team's `id`, through `params.id`              |

### Player Endpoints

| Method   | Path                    | Description                                                                                                                                                                                                                                                                                                                             |
| -------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **POST** | `/players`              | Creates a `player`, expects object, fields: `firstName` and `lastName` required.                                                                                                                                                                                                                                                        |
| **GET**  | `/players`              | Retrieves `all` existing `players` in the database.                                                                                                                                                                                                                                                                                     |
| **GET**  | `/players/match/:lName` | Retrieves `all players` whose `last name` matches the params given through `params.lName`                                                                                                                                                                                                                                               |
| **GET**  | `/players/:id`          | Retrieves a single `player` by player's `id`, through `params.id`.                                                                                                                                                                                                                                                                      |
| **PUT**  | `/players/add/:id`      | Adds a `player to a team`, expects object, field:`teamId` required, must be `valid team id`. Must provide player `id` through `params.id`. If player is already assigned to a team, must remove from current team first. If team has reached limit of `8 maximum players`, will not allow adding player. Increments team's player count |
| **PUT**  | `/players/remove/:id`   | Removes a `player from a team`. If player already has no team, will not throw error. Must provide player `id` through `params.id`. Decrements team's player count                                                                                                                                                                       |
