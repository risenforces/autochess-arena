const express = require("express")
const bodyParser = require("body-parser")
const passport = require("./passport")
const logger = require("./logger")

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(passport.initialize())
server.use(passport.session())
server.use(logger)

module.exports = server
