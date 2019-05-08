# Teams and Players

## API for teams and players

### Assessment:

-Set up a web API project to interact with a database containing Teams and Players.

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

- Create a Team
- Create a Player
- Add or Remove a Player from a Team
- Query for Players
- Query by ID
- Query All Players
- Query All Players matching a given Last Name
- Query for all Players on a Team
- Query for Teams
- Query by ID
- Query All Teams
- Query All Teams ordered by Name or Location

_For example, we should be able to:_
_Send a POST request containing a Player object to http://localhost:5000/Players and create a new Player_
_Send a GET request to http://localhost:5000/Teams?orderBy=name and see all teams ordered by their name (sorted alphabetically)_
