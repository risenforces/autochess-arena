const dev = process.env.NODE_ENV !== "production"
const host = process.env.HOST
const port = parseInt(process.env.PORT, 10) || 8080
const address = dev ? `${host}:${port}` : host

module.exports = {
  dev,
  host,
  port,
  address,

  mongodbConnectionUrl: process.env.MONGODB_CONNECTION_URL,
  steamApiKey: process.env.STEAM_API_KEY,
  sessionSecret: process.env.SESSION_SECRET
}
