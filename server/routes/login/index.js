const server = require("../../server")
const passport = require("../../passport")

server.get("/login", passport.authenticate("steam"))
server.get("/login/callback", passport.authenticate("steam"), (req, res) => {
  res.redirect("/")
})
