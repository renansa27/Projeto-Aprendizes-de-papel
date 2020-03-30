const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const alunoController = require('../controllers/alunoController');
const professorController = require('../controllers/professorController');
const funcionarioController = require('../controllers/funcionarioController');
const aulaController = require('../controllers/aulaController');
const adminRoute = require('./admin');

const cors = require('cors');

// GET: req.query
// POST: req.body
// PARAMETROS DA URL: req.params

// SEND: res.send
// JSON: res.json
const router = express.Router();

//router.get("/", homeController.index);
router.get("/", cors(), homeController.index);

router.get("/admin", adminRoute);

router.get("/showName", userController.showName);

router.get("/users/login", userController.login);

//ROTA CRUD ALUNOS

router.post("/alunos/addAluno", alunoController.addAluno);

router.get("/alunos/getAllAlunos", alunoController.getAllAlunos);

router.get("/alunos/getOneAluno", alunoController.getOneAluno);

router.put("/alunos/updateAluno", alunoController.updateAluno);

router.delete("/alunos/deleteAluno", alunoController.deleteAluno);

//ROTA CRUD PROFESSORES

router.post("/professores/addProfessor", professorController.addProfessor);

router.get("/professores/getAllProfessores", professorController.getAllProfessores);

router.get("/professores/getOneProfessor", professorController.getOneProfessor);

router.put("/professores/updateProfessor", professorController.updateProfessor);

router.delete("/professores/deleteProfessor", professorController.deleteProfessor);

//ROTA CRUD FUNCIONÁRIOS

router.post("/funcionarios/addFuncionario", funcionarioController.addFuncionario);

router.get("/funcionarios/getAllFuncionarios", funcionarioController.getAllFuncionarios);

router.get("/funcionarios/getOneFuncionario", funcionarioController.getOneFuncionario);

router.put("/funcionarios/updateFuncionario", funcionarioController.updateFuncionario);

router.delete("/funcionarios/deleteFuncionario", funcionarioController.deleteFuncionario);

//ROTA CRUD AULA

router.post("/aula/addAula", aulaController.addAula);

router.get("/aula/getAllAulas", aulaController.getAllAulas);

router.get("/aula/getOneAula", aulaController.getOneAula);

router.put("/aula/updateAula", aulaController.updateAula);

router.delete("/aula/deleteAula", aulaController.deleteAula);

module.exports = router;