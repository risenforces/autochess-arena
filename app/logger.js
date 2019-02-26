const morgan = require("morgan")
const fs = require("fs")

const dev = process.env.NODE_ENV !== "production"

const morganFormat = dev ? "dev" : "common"
const morganOptions = dev ? {} : { stream: fs.createWriteStream("./app.log") }

const logger = morgan(morganFormat, morganOptions)

module.exports = logger
