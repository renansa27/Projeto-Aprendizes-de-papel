//github: https://github.com/wilian746/ProdutosCrud/blob/master/server/src/Controllers/ProductController.js
//youtube: https://www.youtube.com/watch?v=pKF1FxsPm5w
const mongoose = require("mongoose");

exports.login = (req, res, next) => {
    let login = req.body.login;
    let password = req.body.password;
    //Procurar por login no banco e verificar a senha...
}