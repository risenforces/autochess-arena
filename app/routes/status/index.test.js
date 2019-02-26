const fastify = require("../../fastify")
require("./index")

describe("Status Route", () => {
  afterAll(fastify.close)

  it("should return status", async () => {
    const response = await fastify.inject({
      url: "/status",
      method: "GET"
    })

    expect(response.statusCode).toBe(200)
    expect(JSON.parse(response.payload)).toEqual({ status: "OK" })
  })
})
