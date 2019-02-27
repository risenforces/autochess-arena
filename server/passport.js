const passport = require("passport")
const { Strategy: SteamStrategy } = require("passport-steam")

const host = process.env.HOST
const port = process.env.PORT
const steamApiKey = process.env.STEAM_API_KEY

const address = host + (port ? `:${port}` : "")

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(
  new SteamStrategy(
    {
      returnURL: `${address}/auth/callback`,
      realm: address,
      apiKey: steamApiKey
    },
    (identifier, profile, done) => done(null, profile)
  )
)

module.exports = passport
