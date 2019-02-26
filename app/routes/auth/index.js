const app = require("../../app")
const passport = require("../../passport")

app.get("/auth", passport.authenticate("steam"))
app.get("/auth/callback", passport.authenticate("steam"))
