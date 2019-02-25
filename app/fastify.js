const Fastify = require("fastify")
const pino = require("pino")

const logger = pino({ level: "error" }, pino.destination("errors.log"))

const fastify = Fastify({
  logger
})

module.exports = fastify
