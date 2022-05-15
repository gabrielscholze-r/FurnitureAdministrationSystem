const User = require('../models/User')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

module.exports = {
    async login(req, res) {
        const { user, password } = req.body;
        const usuario = await User.findOne({ user: user })
        if (!usuario) {
            return res.status(404).json({ msg: "Usuário não encontrado" })
        }
        if (!(await bcrypt.compare(password, usuario.password))) {
            return res.status(404).json({ msg: "Senha inválida" });
        }
        return res.status(200).json({ msg: 1})
    }
}