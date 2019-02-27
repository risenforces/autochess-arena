const { model } = require("mongoose")
const UserSchema = require("../schemas/User")

const UserModel = model("User", UserSchema)

module.exports = UserModel
