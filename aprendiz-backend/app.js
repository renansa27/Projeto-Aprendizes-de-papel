const express = require('express');
const router = require('./routes/index');

//Settings
const app = express();
app.use("/", router);

//Tratamento de requisições via POST
app.use(express.json());

module.exports = app;