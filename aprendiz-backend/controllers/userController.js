//github: https://github.com/wilian746/ProdutosCrud/blob/master/server/src/Controllers/ProductController.js
//youtube: https://www.youtube.com/watch?v=pKF1FxsPm5w

exports.login = (req, res) => {
    let obj = {
        'pageTitle': 'Home',
        userName: res.userInfo
    };
}

exports.showName = (req, res) => {
    res.send("Bem Vindo " + req.body.name);
}