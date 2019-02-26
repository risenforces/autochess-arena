const fastify = require("./fastify")

require("./routes")

fastify.listen(8080, (err, address) => {
  if (err) throw err
  console.info(`Listening on ${address}`)
})
