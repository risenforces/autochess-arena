const app = require("../../app")
const server = require("../server")

server.get("/", (req, res) => {
  app.render(req, res, "/index")
})

require("./status")
require("./auth")
require("./account")

server.get("*", app.getRequestHandler())
