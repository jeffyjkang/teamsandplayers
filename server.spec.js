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
  });
  // players endpoints
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
  });
});
