const Sofa = require('../models/Sofa')
const mongoose = require('mongoose')
module.exports = {

    async read(req, res) {

        const SofaList = await Sofa.find();
        return res.json(SofaList)


    },

    async create(req, res) {
        const { name, price, qtd } = req.body;
        if (!name || !price || !qtd) {
            return res.status(400).json({ error: "Informações faltando!" });
        }

        const sofaCreated = await Sofa.create({
            name,
            price,
            qtd
        });
        return res.json(sofaCreated);
    },

    async delete(req, res) {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "Regitro não encontrado"});
        }
        const sofaDeleted = await Sofa.findOneAndDelete({_id:id});
        return res.json(sofaDeleted);
        
    },
    // async update(req, res){
    //     const {id} = req.params;
    //     const sofa = await Sofa.findOne({_id: id});
    //     if(!mongoose.Types.ObjectId.isValid(id)){
    //         return res.status(401).json({error: "Registro não encontrado"});
    //     }
    //     if(sofa.qtd==1){
    //         await Sofa.findByIdAndDelete(id);
    //         return 0;
    //     }
    //     sofa.qtd -= 1;

    //     await sofa.save();
    //     return res.json(sofa);


    // }
}