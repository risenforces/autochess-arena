const server = require("../../server")

server.get("/status", (req, res) => {
  res.send({ status: "OK" })
})
