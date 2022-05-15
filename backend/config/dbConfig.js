// mongodb+srv://gabrielscholze-r:Ogabucego24@cluster0.rbzm5.mongodb.net/i_moveis?retryWrites=true&w=majority
require('dotenv').config()
const mongoose = require('mongoose')
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
const dbConfig = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rbzm5.mongodb.net/i_moveis?retryWrites=true&w=majority`

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = connection;