const app = require("../../../app")
const server = require("../../server")
const checkAuth = require("../../checkAuth")

server.get("/account", checkAuth, (req, res) => {
  app.render(req, res, "/account", { user: req.user })
})
