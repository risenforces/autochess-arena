const morgan = require("morgan")
const fs = require("fs")

const dev = process.env.NODE_ENV !== "production"

const morganFormat = dev ? "dev" : "common"
const morganOptions = dev ? {} : { stream: fs.createWriteStream("./app.log") }

if (dev) {
  morgan.token("url", req => (req.url.length < 49 ? req.url : `${req.url.slice(0, 47)}...`))
}

const logger = morgan(morganFormat, morganOptions)

module.exports = logger
