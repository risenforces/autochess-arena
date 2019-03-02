const dev = process.env.NODE_ENV !== "production"
const host = process.env.HOST
const port = process.env.PORT

module.exports = {
  dev,
  host,
  port,
  address: dev ? `${host}:${port}` : host,

  mongodbConnectionUrl: process.env.MONGODB_CONNECTION_URL,
  steamApiKey: process.env.STEAM_API_KEY,
  sessionSecret: process.env.SESSION_SECRET
}
