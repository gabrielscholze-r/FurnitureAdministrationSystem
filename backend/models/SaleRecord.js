const mongoose = require('mongoose')


const SaleRecord = new mongoose.Schema({
    data: Date,
    price: Number
},{collection:"sales"});

module.exports = mongoose.model('sales', SaleRecord);