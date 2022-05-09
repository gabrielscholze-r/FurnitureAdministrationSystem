const mongoose = require('mongoose')


const Chair = new mongoose.Schema({
    name: String,
    price: Number,
    qtd: Number
},{collection:"chair"});

module.exports = mongoose.model('chair', Chair);