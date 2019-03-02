const express = require("express")
const bodyParser = require("body-parser")
const session = require("./session")
const passport = require("./passport")
const logger = require("./logger")

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(session)
server.use(passport.initialize())
server.use(passport.session())
server.use(logger)
server.use("/static", express.static(__dirname + "/static", {
  maxAge: "365d"
}));

module.exports = server
