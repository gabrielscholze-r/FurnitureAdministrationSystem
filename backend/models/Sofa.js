const mongoose = require('mongoose')


const Sofa = new mongoose.Schema({
    name: String,
    price: Number,
    qtd: Number
},{collection:"sofa"});

module.exports = mongoose.model('sofa', Sofa);