const mongoose = require("mongoose");

const User = mongoose.Schema({
    user: String,
    password: String
},{collection:"users"})

module.exports = mongoose.model('users', User)