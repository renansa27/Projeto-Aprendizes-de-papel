const aulaDAO = require('../models/aulaModel');

//POST
exports.addAula = (req, res, next) => {
    aulaDAO.create({
        //Dados na escola
        professor: req.body.professor,
        materia: req.body.materia,
        data: req.body.data,
        hora: req.body.hora,
        conteudo: req.body.conteudo,
        serie: req.body.serie,
        turma: req.body.turma

    }, (err, aula) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao criar aula', error: err })
        }

        if (!aula || Object.keys(aula).length === 0) {
            return res.status(404).send('Aula não encontrada!')
        }

        return res.status(200).json({
            message: 'Aula criada!',
            aula: aula
        })
    });
}

//GET
exports.getAllAulas = (req, res, next) => {
    aulaDAO.find().exec((err, aulaList) => {
        if (err) {
            return res.status(500).json({ error: err })
        }

        if (!aulaList || aulaList.length === 0) {
            return res.status(404).send('Aulas não encontradas!')
        }

        return res.status(200).json({ aula: aulaList })
    })
}

//GET
exports.getOneAula = (req, res, next) => {
    aulaDAO.findById(req.body.id, (err, aula) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao procurar aula', error: err });
        }

        if (!aula || Object.keys(aula).length === 0) {
            return res.status(404).send('Aula não encontrada!');
        }
        return res.status(200).json({ aula: aula });
    })
}

//PUT
exports.updateAula = (req, res, next) => {
    aulaDAO.findById({ _id: req.body.id }, (err, aula) => {
        if (err) {
            return handleError(err);
        }
        if (!aula || Object.keys(aula).length === 0) {
            return res.status(404).send('Aula não encontrada!');
        }
        aula.set({
            //Dados na escola
            professor: req.body.professor,
            materia: req.body.materia,
            data: req.body.data,
            hora: req.body.hora,
            conteudo: req.body.conteudo,
            serie: req.body.serie,
            turma: req.body.turma
        })
        aula.save((err, aulaUpdated) => {
            if (err) {
                return handleError(err);
            }

            return res.status(200).json({
                message: 'Aula atualizada!',
                aula: aulaUpdated
            });
        });
    });
}

//DELETE
exports.deleteAula = (req, res, next) => {
    aulaDAO.findById(req.body.id, (err, aulaFind) => {
        if (err) {
            return res.status(404).json({ message: 'Erro: ', error: err });
        }
        if (!aulaFind || Object.keys(aulaFind).length === 0) {
            return res.status(404).send('Aula não encontrada!');
        }
        aulas.remove({ _id: req.body.id }, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao deletar aula', error: err });
            }
            return res.status(200).json({ message: 'Aula deletada!' });
        });
    });
}