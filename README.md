# teamsandplayers

API for teams and players

Assessment:
Set up a web API project to interact with a database containing Teams and Players.
Ignore the parts about calling the API with jQuery - we will be testing your application by hitting certain endpoints with PostMan. This is not a UI
test.
Guidelines:
Create an entity framework DbContext that models Team and Player objects.
A Team should contain an ID, a Name, a Location, and a List of Players on the team.
No two Teams should exist with the same Name and Location
A Team should have a maximum of 8 Players
Name and Location are required fields
A Player should contain an ID, a FirstName, and a LastName.
A Player can only be on one Team
First Name, and Last Name are required fields
(The tutorial shows you how to set it up as an in-memory database so you don't have to worry about using a real database.)
Create endpoints that allow us to:
Create a Team
Create a Player
Add or Remove a Player from a Team
Query for Players
Query by ID
Query All Players
Query All Players matching a given Last Name
Query for all Players on a Team
Query for Teams
Query by ID
Query All Teams
Query All Teams ordered by Name or Location

For example, we should be able to:
Send a POST request containing a Player object to http://localhost:5000/Players and create a new Player
Send a GET request to http://localhost:5000/Teams?orderBy=name and see all teams ordered by their name (sorted alphabetically)
