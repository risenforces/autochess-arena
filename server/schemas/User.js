const { Schema } = require("mongoose")

const UserSchema = new Schema({
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  steam: {
    id: String,
    profile_name: String,
    avatar_url: String,
    profile_url: String
  },
  game: {
    rank: {
      number: Number,
      string: String
    },
    matches: Number,
    candies: Number
  }
})

module.exports = UserSchema
