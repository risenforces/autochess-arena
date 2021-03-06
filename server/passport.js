const passport = require("passport")
const { Strategy: SteamStrategy } = require("passport-steam")
const User = require("./models/User")
const AutoChessAPI = require("./helpers/AutoChessAPI")
const { address, steamApiKey } = require("./constants/env")

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser(async (_id, done) => {
  User.findById(_id).then(user => done(null, user))
})

passport.use(
  new SteamStrategy(
    {
      returnURL: address + "/login/callback",
      realm: address,
      apiKey: steamApiKey
    },
    async (identifier, profile, done) => {
      const { steamid, personaname, profileurl, avatarmedium } = profile._json
      const user = await User.findOne({ "steam.id": steamid }).exec()
      if (!user) {
        const playerFullDataResponse = await AutoChessAPI.getPlayerFullData(
          steamid
        )

        const playerFullData = playerFullDataResponse.data

        let gameData
        if (playerFullDataResponse.status === "OK") {
          gameData = {
            exists: true,
            rank: playerFullData.rank,
            matches: playerFullData.matches,
            candies: playerFullData.candies
          }
        } else {
          gameData = {
            exists: false,
            error: playerFullDataResponse.message
          }
        }

        const user = await User.create({
          steam: {
            id: steamid,
            profile_name: personaname,
            avatar_url: avatarmedium,
            profile_url: profileurl
          },
          game: gameData
        })

        return done(null, user, { message: "Created account" })
      }
      return done(null, user, { message: "Logged In" })
    }
  )
)

module.exports = passport
