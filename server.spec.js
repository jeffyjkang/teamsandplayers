const request = require("supertest");
const { server } = require("./server");

describe("server.js", () => {
  describe("root endpoint (/)", () => {
    test("should return server running", async () => {
      const expected = "<h1>Server Running<h1>";
      const response = await request(server).get("/");
      expect(response.text).toEqual(expected);
    });
    test("should return type text", async () => {
      const expected = "text/html";
      const response = await request(server).get("/");
      expect(response.type).toEqual(expected);
    });
  });
  // teams endpoints
  //
  describe("teams endpoint (/teams)", () => {
    // post endpoint for teams
    // first entry
    test("should return status 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/teams")
        .send({ name: "testname", location: "testlocation" });
      expect(response.status).toEqual(expected);
    });
    // missing name
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/teams")
        .send({ name: "", location: "testlocation0" });
      expect(response.status).toEqual(expected);
    });
    // missing location
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/teams")
        .send({ name: "testname0", location: "" });
      expect(response.status).toEqual(expected);
    });
    // duplicate entry
    test("should return status 500", async () => {
      const expected = 500;
      const response = await request(server)
        .post("/teams")
        .send({ name: "testname", location: "testlocation" });
      expect(response.status).toEqual(expected);
    });
    // get endpoint for teams
    // get all teams
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams");
      expect(response.status).toEqual(expected);
    });
    // get all teams by name ascending
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams/name_asc");
      expect(response.status).toEqual(expected);
    });
    // get all teams by name descending
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams/name_desc");
      expect(response.status).toEqual(expected);
    });
    // get all teams by location ascending
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams/loc_asc");
      expect(response.status).toEqual(expected);
    });
    // get all teams by location descending
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams/loc_desc");
      expect(response.status).toEqual(expected);
    });
    // get single team
    test("should return 404", async () => {
      const expected = 404;
      const response = await request(server).get("/teams/1000");
      expect(response.status).toEqual(expected);
    });
    // get all players in a team with existing team
    test("should return 200", async () => {
      const expected = 200;
      const response = await request(server).get("/teams/players/1");
      expect(response.status).toEqual(expected);
    });
    // get all players in a team with no existing team
    test("should return 404", async () => {
      const expected = 404;
      const response = await request(server).get("/teams/players/1000");
      expect(response.status).toEqual(expected);
    });
  });
  // players endpoints
  //
  describe("players endpont (/players)", () => {
    // post endpoint for players
    // first entry
    test("should return status 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/players")
        .send({ firstName: "fnTest", lastName: "lnTest" });
      expect(response.status).toEqual(expected);
    });
    // missing first name
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/players")
        .send({ firstName: "", lastName: "lnTest0" });
      expect(response.status).toEqual(expected);
    });
    // missing last name
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/players")
        .send({ firstName: "fnTest0", lastName: "" });
      expect(response.status).toEqual(expected);
    });
    // get endpoint for players
    // get all players
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/players");
      expect(response.status).toEqual(expected);
    });
    // get all players matching the last name
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/players/match/lnTest");
      expect(response.status).toEqual(expected);
    });
    // get single player
    test("should return 404", async () => {
      const expected = 404;
      const response = await request(server).get("/players/1000");
      expect(response.status).toEqual(expected);
    });
  });
});
