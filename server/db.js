const mongoose = require("mongoose")

const dev = process.env.NODE_ENV !== "production"
const connectionUrl = process.env.MONGODB_CONNECTION_URL

const info = (message) => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.info(message)
}

const error = (message) => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.error(message)
}

mongoose.connect(connectionUrl, { useNewUrlParser: true }, (err) => {
  if (err) error(err)
  info("Connected to MongoDB.")
})

const db = mongoose.connection

db.on("error", (err) => {
  error(err)
})

module.exports = db
