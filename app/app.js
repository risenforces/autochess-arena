const express = require("express")
const logger = require("./logger")

const app = express()

app.use(logger)

module.exports = app
