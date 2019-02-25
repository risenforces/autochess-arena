const fastify = require("./fastify")

fastify.get("/", (req, res) => {
  res.send("Welcome to AutoChess Arena!")
})

fastify.listen(8080, (err, address) => {
  if (err) throw err
  console.info(`Listening on ${address}`)
})
