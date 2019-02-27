const server = require("../../server")
const passport = require("../../passport")

server.get("/auth", passport.authenticate("steam"))
server.get("/auth/callback", passport.authenticate("steam"), (req, res) => {
  res.redirect("/account")
})
