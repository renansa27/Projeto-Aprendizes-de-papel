const express = require('express');

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Resposta para requisição admin");
});

module.exports = router;