const mongoose = require('mongoose')


const Table = new mongoose.Schema({
    name: String,
    price: Number,
    qtd: Number
},{collection:"table"});

module.exports = mongoose.model('table', Table);