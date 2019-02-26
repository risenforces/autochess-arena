const app = require("../../app")

app.get("/status", (req, res) => {
  res.send({ status: "OK" })
})
