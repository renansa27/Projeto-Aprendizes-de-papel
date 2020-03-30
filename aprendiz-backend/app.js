const express = require('express');
const router = require('./routes/index');
const admin = require('./routes/admin');
//CORS
const cors = require('cors')

//Settings
const app = express();

// (app.use) => Global middlewares
/* app.use((req, res, next) => {
    res.locals.h = helpers;
    next();
}); */

//Enable All CORS Requests
/* app.use(cors({
    origin: function (origin, callback) {
        console.log("Entrei na verificação da Orgin!")
        if ('192.168.0.10' !== -1) {
            callback(null, true);
            console.log("Permitido!");
        } else {
            callback(new Error('Acesso não permitido pelo CORS!'))
            console.log("Negado pelo CORS!");
        }
    },
    methods: "GET, POST, PUT, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
})) */

/* app.use((req, res, next) => {
    //Mocking the address allowed
    res.header('Acess-Control-Allow-Origin', '*');
    //Mocking the Header res.header("Acess-Control-Allow-Headers", "Origin", "X-Requested-With","Content-Type","Accept","Authorization")
    res.header("Acess-Control-Allow-Headers", "*");
    if (req.method === 'OPTIONS') {
        res.header("Acess-Control-Allow-Methods", "PUT, POST, DELETE, GET");
        return res.status(200).json({});
    }
    next();
}); */

// Handles with POST requests
app.use(express.json());

//Para usuario normal
app.use("/", router);

//Para o modo admin
/* app.use("/", admin); */

/* app.head("/simple-cors", cors(), (req, res) => {
    console.info("HEAD /simple-cors");
    res.sendStatus(204);
});
app.get("/simple-cors", cors(), (req, res) => {
    console.info("GET /simple-cors");
    res.json({
        text: "Simple CORS requests are working. [GET]"
    });
});
app.post("/simple-cors", cors(), (req, res) => {
    console.info("POST /simple-cors");
    res.json({
        text: "Simple CORS requests are working. [POST]"
    });
}); */

module.exports = app;