const express = require('express');
const router = require('./routes/index');
const admin = require('./routes/admin');

//Settings
const app = express();

// (app.use) => Global middlewares
/* app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
}); */

// Handles with POST requests
app.use(express.json());

//Para usuario normal
app.use("/", router);

//Para o modo admin
/* app.use("/", admin); */

module.exports = app;