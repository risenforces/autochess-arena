require("dotenv").config()

const os = require("os")
const cluster = require("cluster")
const app = require("../app")
const server = require("./server")
require("./routes")

require("./db")

const dev = process.env.NODE_ENV !== "production"
const port = parseInt(process.env.PORT, 10) || 8080

// next.js doesn't allow to use clustering in development mode
const clusteringEnabled = !dev

const info = (message) => {
  // it's useless to log start messages in development mode (next.js removes most of them)
  if (!dev) console.info(message)
}

const setupClusters = () => {
  const cores = os.cpus().length

  info(`Setting on ${cores} cores.`)

  for (let i = 0; i < cores; i++) cluster.fork()

  cluster.on("online", (worker) => {
    info(`Worker ${worker.process.pid} is started.`)
  })

  cluster.on("message", (worker, message) => {
    info(`Worker ${worker.process.pid} sent message: ${message}.`)
  })

  cluster.on("exit", (worker, code, signal) => {
    info(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}.`)
  })
}

const setupApp = async () => {
  await app.prepare()
  server.listen(port)
  info(`Listening on ${port}`)
}

if (clusteringEnabled && cluster.isMaster) {
  setupClusters()
} else {
  setupApp()
}
