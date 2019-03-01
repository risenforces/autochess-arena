const passport = require("passport")
const { Strategy: SteamStrategy } = require("passport-steam")
const User = require("./models/User")
const AutoChessAPI = require("./helpers/AutoChessAPI")

const dev = process.env.NODE_ENV !== "production"
const host = process.env.HOST
const port = process.env.PORT

const address = host + (port && dev ? `:${port}` : "")
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
      returnURL: `${address}/login/callback`,
      realm: address,
      apiKey: steamApiKey
    },
    async (identifier, profile, done) => {
      const { steamid, personaname, profileurl, avatarmedium } = profile._json
      const user = await User.findOne({ "steam.id": steamid }).exec()
      if (!user) {
        const gameData = await AutoChessAPI.getPlayerFullData(steamid)
        const game = gameData.data

        const user = await User.create({
          steam: {
            id: steamid,
            profile_name: personaname,
            avatar_url: avatarmedium,
            profile_url: profileurl
          },
          game: {
            rank: game.rank,
            matches: game.matches,
            candies: game.candies
          }
        })
        return done(null, user, { message: "Created account" })
      }
      return done(null, user, { message: "Logged In" })
    }
  )
)

module.exports = passport
