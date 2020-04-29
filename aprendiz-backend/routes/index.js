const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');
const alunoController = require('../controllers/alunoController');
const professorController = require('../controllers/professorController');
const funcionarioController = require('../controllers/funcionarioController');
const aulaController = require('../controllers/aulaController');
const adminRoute = require('./admin');

const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// GET: req.query
// POST: req.body
// PARAMETROS DA URL: req.params

// SEND: res.send
// JSON: res.json
const router = express.Router();

//MODOS DO SISTEMA
router.get("/", cors(corsOptions), homeController.index);

router.get("/admin", cors(corsOptions), adminRoute);

//LOGIN
router.get("/users/login", cors(corsOptions), userController.login);

//ROTA CRUD ALUNOS

router.post("/alunos/addAluno", cors(corsOptions), alunoController.addAluno);

router.get("/alunos/getAllAlunos", cors(corsOptions), alunoController.getAllAlunos);

router.get("/alunos/getOneAluno", cors(corsOptions), alunoController.getOneAluno);

router.put("/alunos/updateAluno", cors(corsOptions), alunoController.updateAluno);

router.delete("/alunos/deleteAluno", cors(corsOptions), alunoController.deleteAluno);

//ROTA CRUD PROFESSORES

router.post("/professores/addProfessor", cors(corsOptions), professorController.addProfessor);

router.get("/professores/getAllProfessores", cors(corsOptions), professorController.getAllProfessores);

router.get("/professores/getOneProfessor", cors(corsOptions), professorController.getOneProfessor);

router.put("/professores/updateProfessor", cors(corsOptions), professorController.updateProfessor);

router.delete("/professores/deleteProfessor", cors(corsOptions), professorController.deleteProfessor);

//ROTA CRUD FUNCIONÁRIOS

router.post("/funcionarios/addFuncionario", cors(corsOptions), funcionarioController.addFuncionario);

router.get("/funcionarios/getAllFuncionarios", cors(corsOptions), funcionarioController.getAllFuncionarios);

router.get("/funcionarios/getOneFuncionario", cors(corsOptions), funcionarioController.getOneFuncionario);

router.put("/funcionarios/updateFuncionario", cors(corsOptions), funcionarioController.updateFuncionario);

router.delete("/funcionarios/deleteFuncionario", cors(corsOptions), funcionarioController.deleteFuncionario);

//ROTA CRUD AULA

router.post("/aula/addAula", cors(corsOptions), aulaController.addAula);

router.get("/aula/getAllAulas", cors(corsOptions), aulaController.getAllAulas);

router.get("/aula/getOneAula", cors(corsOptions), aulaController.getOneAula);

router.put("/aula/updateAula", cors(corsOptions), aulaController.updateAula);

router.delete("/aula/deleteAula", cors(corsOptions), aulaController.deleteAula);

module.exports = router;