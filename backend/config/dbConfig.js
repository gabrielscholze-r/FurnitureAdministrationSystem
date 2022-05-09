// mongodb+srv://gabrielscholze-r:Ogabucego24@cluster0.rbzm5.mongodb.net/i_moveis?retryWrites=true&w=majority
const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://gabrielscholze-r:Ogabucego24@cluster0.rbzm5.mongodb.net/i_moveis?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports = connection;