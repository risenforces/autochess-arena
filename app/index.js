require("dotenv").config()

const os = require("os")
const cluster = require("cluster")
const fastify = require("./fastify")

require("./routes")

const port = parseInt(process.env.PORT, 10) || 8080
const clusteringEnabled = process.env.ENABLE_CLUSTERING === "true"

const setupClusters = () => {
  const cores = os.cpus().length

  console.info(`Setting on ${cores} cores.`)

  for (let i = 0; i < cores; i++) cluster.fork()

  cluster.on("online", (worker) => {
    console.info(`Worker ${worker.process.pid} is started.`)
  })

  cluster.on("message", (worker, message) => {
    console.info(`Worker ${worker.process.pid} sent message: ${message}.`)
  })

  cluster.on("exit", (worker, code, signal) => {
    const message = `Worker ${worker.process.pid} died with code ${code} and signal ${signal}.`
    fastify.log.error(message)
    console.error(message)
  })
}

const setupFastify = () => {
  fastify.listen(port, (err, address) => {
    if (err) throw err
    console.info(`Listening on ${address}.`)
  })
}

if (clusteringEnabled && cluster.isMaster) {
  setupClusters()
} else {
  setupFastify()
}
