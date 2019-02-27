const mongoose = require("mongoose")

const connectionUrl = process.env.MONGODB_CONNECTION_URL

mongoose.connect(connectionUrl, { useNewUrlParser: true }, (err) => {
  if (err) console.error(err)
  console.info("Connected to MongoDB.")
})

const db = mongoose.connection

db.on("error", (err) => {
  console.error(err)
})

module.exports = db
