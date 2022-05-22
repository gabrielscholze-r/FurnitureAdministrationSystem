const mongoose = require('mongoose')


const SaleRecord = new mongoose.Schema({
    year: Number,
    month: Number,
    price: Number,
    qtd: Number
},{collection:"sales"});

module.exports = mongoose.model('sales', SaleRecord);