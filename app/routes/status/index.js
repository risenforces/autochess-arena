const fastify = require("../../fastify")

fastify.get("/status", (req, res) => {
  res.send({ status: "OK" })
})
