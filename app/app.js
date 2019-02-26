const express = require("express")
const bodyParser = require("body-parser")
const passport = require("./passport")
const logger = require("./logger")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(logger)

module.exports = app
