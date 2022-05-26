const mongoose = require('mongoose')


const SaleRecord = new mongoose.Schema({
    month: Number,
    dateTime: Number,
    price: Number,
    qtd: Number
}, { collection: "sales" });

module.exports = mongoose.model('sales', SaleRecord);