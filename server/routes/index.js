const app = require("../../app")
const server = require("../server")

server.get("/", (req, res) => {
  app.render(req, res, "/index", { user: req.user })
})

require("./status")
require("./login")
require("./logout")

server.get("*", app.getRequestHandler())
