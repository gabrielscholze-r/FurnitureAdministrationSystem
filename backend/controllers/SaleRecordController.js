const SaleRecord = require('../models/SaleRecord')
const mongoose = require('mongoose')
module.exports = {
    async create(req, res){
        const {dateTime, price,qtd} = req.body;
        if(price==0){
            return res.status(400).json({error: "Informações em falta"})
        }
        const newRecord = await SaleRecord.create({
            dateTime,
            price,
            qtd
        })
        return res.json(newRecord)
    },
    async read(req, res){
        const RecordList = await SaleRecord.find();
        return res.json(RecordList);
    }
}