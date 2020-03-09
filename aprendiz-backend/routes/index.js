const express = require('express');

// GET: req.query
// POST: req.body
// PARAMETROS DA URL: req.params

// SEND: res.send
// JSON: res.json

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Olá Mundo! 2.0");
});

//localhost:7777/posts/1
router.get("/posts/:id", (req, res) => {
    let id = req.params.id;
    res.send("ID do post: " + id);
});

router.get('/sobre', (req, res) => {
    res.send("Página SOBRE!");
})

module.exports = router;