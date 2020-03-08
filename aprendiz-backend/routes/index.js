const express = require('express');

const router = express.Router();
router.get("/", (req, res) => {
    res.send("Olá Mundo! 2.0");
});

module.exports = router;