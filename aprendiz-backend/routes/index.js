const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const alunoController = require('../controllers/alunoController');
const adminRoute = require('./admin');

// GET: req.query
// POST: req.body
// PARAMETROS DA URL: req.params

// SEND: res.send
// JSON: res.json
const router = express.Router();

router.get("/", homeController.index);

router.get("/admin", adminRoute);

router.get("/showName", userController.showName);

router.get("/users/login", userController.login);

//ROTA ALUNOS

router.post("/alunos/addAluno", alunoController.addAluno);

router.get("/alunos/getAllAlunos", alunoController.getAllAlunos);

router.get("/alunos/getOneAluno", alunoController.getOneAluno);

router.put("/alunos/updateAluno", alunoController.updateAluno);

router.delete("/alunos/deleteAluno", alunoController.deleteAluno);

module.exports = router;