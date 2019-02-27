const next = require("next")

const dev = process.env.NODE_ENV !== "production"

const app = next({
  dev,
  dir: "./app"
})

module.exports = app
