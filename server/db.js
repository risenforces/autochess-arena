const mongoose = require("mongoose")
const { dev, mongodbConnectionUrl } = require("./constants/env")

const info = message => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.info(message)
}

const error = message => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.error(message)
}

mongoose.connect(mongodbConnectionUrl, { useNewUrlParser: true }, err => {
  if (err) error(err)
  info("Connected to MongoDB.")
})

const db = mongoose.connection

db.on("error", err => {
  error(err)
})

module.exports = db
