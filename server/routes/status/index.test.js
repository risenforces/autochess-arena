const request = require("supertest")
const server = require("../../server")
require("./index")

describe("Status Route", () => {
  it("should return status", async () => {
    const response = await request(server).get("/status")

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ status: "OK" })
  })
})
