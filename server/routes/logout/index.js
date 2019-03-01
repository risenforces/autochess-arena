const server = require("../../server")

server.get("/logout", (req, res) => {
  req.logout()
  res.redirect("/")
})
