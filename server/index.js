require("dotenv").config()

const app = require("../app")
const server = require("./server")
const { dev, port } = require("./constants/env")
require("./routes")

require("./db")

const info = message => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.info(message)
}

app.prepare().then(() => {
  server.listen(port)
  info(`Listening on ${port}`)
})
