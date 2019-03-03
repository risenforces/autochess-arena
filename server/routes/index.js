const app = require("../../app")
const server = require("../server")
const handle = app.getRequestHandler()

server.get("/", (req, res) => {
  app.render(req, res, "/index", { user: req.user })
})

require("./login")
require("./logout")

server.get("*", (req, res) => {
  handle(req, res)
})
