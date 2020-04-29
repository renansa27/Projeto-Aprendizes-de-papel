const express = require('express');
const router = require('./routes/index');
const admin = require('./routes/admin');

//Settings
const app = express();

//Handles with POST requests
app.use(express.json());

//Para usuario normal
app.use("/", router);

//Para o modo admin
/* app.use("/", admin); */

module.exports = app;