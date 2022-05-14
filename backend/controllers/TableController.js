const Table = require('../models/Table');
const mongoose = require('mongoose');

module.exports = {

    async read(req, res){
        const TableList = await Table.find();
        return res.json(TableList);
    },

    async create(req, res){
        const { name, price, qtd } = req.body;
        if (!name || !price || !qtd) {
            return res.status(400).json({ error: "Informações faltando!" });
        }

        const TableCreated = await Table.create({
            name,
            price,
            qtd
        });
        return res.json(TableCreated);
    },

    async delete(req, res){
        const {id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Registro não encontrado"});
        }
        const TableDeleted = await Table.findOneAndDelete({_id: id});
        return res.json(TableDeleted)

    },

    async update(req, res){
        const {id} = req.params;
        const table = await Table.findOne({_id: id});
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Registro não encontrado"});
        }
        if(table.qtd==1){
            const DeletedTable = await Table.findByIdAndDelete(id);
            return 0;
        }
        table.qtd -= 1;

        await table.save();
        return res.json(table);


    }

}