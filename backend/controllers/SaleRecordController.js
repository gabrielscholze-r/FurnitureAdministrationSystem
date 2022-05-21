const SaleRecord = require('../models/SaleRecord')
const mongoose = require('mongoose')
module.exports = {
    async create(req, res){
        const {data, price} = req.body;
        if(!data || !price){
            return res.status(400).json({error: "Informações em falta"})
        }
        const newRecord = await SaleRecord.create({
            data,
            price
        })
        return res.json(newRecord)
    }
}