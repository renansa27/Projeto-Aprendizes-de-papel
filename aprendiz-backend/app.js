const express = require('express');

//Rotas
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Olá Mundo! 2.0");
});

//Configurações
const app = express();
app.use("/", router);

module.exports = app;