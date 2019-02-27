require("dotenv").config()

const os = require("os")
const cluster = require("cluster")
const server = require("./server")

require("./db")

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
    console.error(`Worker ${worker.process.pid} died with code ${code} and signal ${signal}.`)
  })
}

const setupApp = () => {
  server.listen(port)
  console.info(`Listening on ${port}`)
}

if (clusteringEnabled && cluster.isMaster) {
  setupClusters()
} else {
  setupApp()
}
