//Dependencies => mongoose, dotenv
const app = require("./app");
require('dotenv').config({ path: "variables.env" });
const mongoose = require("mongoose");

//CONNECTION TO DATA BASE
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
    console.error("ERRO: ", error.message);

});

app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando na porta: " + server.address().port);
});