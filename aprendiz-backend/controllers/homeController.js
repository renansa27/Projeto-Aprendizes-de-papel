const mongoose = require("mongoose");

exports.userMiddleware = (req, res, next) => {
    let info = { name: 'Renan', id: 123 };
    req.userInfo = info;
    next();
}

exports.index = (req, res) => {
    res.send("Olá, seja bem vindo ao sistema de escolas!");
}