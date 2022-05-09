const Chair = require('../models/Chair')
const mongoose = require('mongoose')
module.exports = {

    async read(req, res) {

        const ChairList = await Chair.find();
        return res.json(ChairList)


    },

    async create(req, res) {
        const { name, price, qtd } = req.body;
        if (!name || !price || !qtd) {
            return res.status(400).json({ error: "Informações faltando!" });
        }

        const ChairCreated = await Chair.create({
            name,
            price,
            qtd
        });
        return res.json(ChairCreated);
    },

    async delete(req, res) {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Regitro não encontrado"});
        }
        const ChairDeleted = await Chair.findOneAndDelete({_id:id});
        return res.json(ChairDeleted);
        
    }
}