const express = require('express');
const admin = require('../controllers/adminController');

const router = express.Router();
router.get("/", admin.adminHome);

module.exports = router;