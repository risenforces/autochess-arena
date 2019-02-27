const app = require("../../app")
const server = require("../server")
require("./status")
require("./auth")

server.get("/", (req, res) => {
  app.render(req, res, "/index")
})
