const supertest = require("supertest")
const app = require("../../app")
require("./index")

describe("Status Route", () => {
  it("should return status", async () => {
    const response = await supertest(app).get("/status")

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ status: "OK" })
  })
})
