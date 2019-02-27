const passport = require("passport")
const { Strategy: SteamStrategy } = require("passport-steam")
const User = require("./models/User")

const host = process.env.HOST
const port = process.env.PORT

const address = host + (port ? `:${port}` : "")
const steamApiKey = process.env.STEAM_API_KEY

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (_id, done) => {
  User.findById(_id).then(user => done(null, user))
})

passport.use(
  new SteamStrategy(
    {
      returnURL: `${address}/auth/callback`,
      realm: address,
      apiKey: steamApiKey
    },
    async (identifier, profile, done) => {
      const { steamid, personaname, profileurl, avatar } = profile._json
      const user = await User.findOne({ "steam.id": steamid }).exec()
      if (!user) {
        const user = await User.create({
          steam: {
            id: steamid,
            profile_name: personaname,
            avatar_url: avatar,
            profile_url: profileurl
          }
        })
        return done(null, user, { message: "Created account" })
      }
      return done(null, user, { message: "Logged In" })
    }
  )
)

module.exports = passport
