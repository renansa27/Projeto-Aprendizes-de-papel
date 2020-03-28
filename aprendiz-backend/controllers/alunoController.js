const alunoDAO = require('../models/alunoModel');

//POST
exports.addAluno = (req, res, next) => {
    alunoDAO.create({
        //Dados do aluno
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        idade: req.body.idade,
        sexo: req.body.sexo,
        nacionalidade: req.body.nacionalidade,
        cidadeNascimento: req.body.cidadeNascimento,
        ufNascimento: req.body.ufNascimento,
        tipoSanguineo: req.body.tipoSanguineo,
        cpf: req.body.cpf,
        especial: req.body.especial,
        emailAluno: req.body.emailAluno,

        //Dados RG
        rg: req.body.rg,
        orgaoEmissor: req.body.orgaoEmissor,
        dataEmissao: req.body.dataEmissao,

        //Dados Pais
        nomePai: req.body.nomePai,
        rgPai: req.body.rgPai,
        nomeMae: req.body.nomeMae,
        rgMae: req.body.rgMae,

        //Contatos Pais
        telefonePai: req.body.telefonePai,
        emailPai: req.body.emailPai,
        telefoneMae: req.body.telefoneMae,
        emailMae: req.body.emailMae,

        //Dados na escola
        mensalidade: req.body.mensalidade,
        matricula: req.body.matricula,
        serie: req.body.serie,
        turma: req.body.turma,
        turno: req.body.turno

    }, (err, aluno) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao criar aluno', error: err })

        if (!aluno || Object.keys(aluno).length === 0)
            return res.status(404).send('Aluno não encontrado!')

        return res.status(200).json({
            message: 'Aluno criado!',
            aluno: aluno
        })
    });
}

//GET
exports.getAllAlunos = (req, res, next) => {
    try {
        alunoDAO.find().exec((err, alunosList) => {
            if (err)
                return res.status(500).json({ error: err })

            if (!alunosList || alunosList.length === 0)
                return res.status(404).send('Alunos não encontrados!')

            return res.status(200).json({ aluno: alunosList })
        })
    } catch (e) {
        res.send("Banco de dados não está rodando!" + e.message);
    }
}

//GET
exports.getOneAluno = (req, res, next) => {
    alunoDAO.findById(req.body.id, (err, aluno) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao procurar aluno', error: err });

        if (!aluno || Object.keys(aluno).length === 0) {
            return res.status(404).send('Aluno não encontrado!');
        }

        return res.status(200).json({ aluno: aluno });
    })
}

//PUT
exports.updateAluno = (req, res, next) => {
    alunoDAO.findById({ _id: req.body.id }, (err, aluno) => {
        if (err) {
            return handleError(err);
        }
        if (!aluno || Object.keys(aluno).length === 0) {
            return res.status(404).send('Aluno não encontrado!');
        }
        aluno.set({
            //Dados do aluno
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            sexo: req.body.sexo,
            nacionalidade: req.body.nacionalidade,
            cidadeNascimento: req.body.cidadeNascimento,
            ufNascimento: req.body.ufNascimento,
            tipoSanguineo: req.body.tipoSanguineo,
            rg: req.body.rg,
            orgaoEmissor: req.body.orgaoEmissor,
            dataEmissao: req.body.dataEmissao,
            cpf: req.body.cpf,
            especial: req.body.especial,
            emailAluno: req.body.emailAluno,

            //Dados Pais
            nomePai: req.body.nomePai,
            rgPai: req.body.rgPai,
            nomeMae: req.body.nomeMae,
            rgMae: req.body.rgMae,

            //Contatos Pais
            telefonePai: req.body.telefonePai,
            emailPai: req.body.emailPai,
            telefoneMae: req.body.telefoneMae,
            emailMae: req.body.emailMae,

            //Dados na escola
            mensalidade: req.body.mensalidade,
            matricula: req.body.matricula,
            serie: req.body.serie,
            turma: req.body.turma,
            turno: req.body.turno
        })
        alunoDAO.save((err, alunoUpdated) => {
            if (err)
                return handleError(err);

            return res.status(200).json({
                message: 'Aluno atualizado!',
                aluno: alunoUpdated
            });
        });
    });
}

//DELETE
exports.deleteAluno = (req, res, next) => {
    alunoDAO.findById(req.body.id, (err, alunoFind) => {
        if (err) {
            return res.status(404).json({ message: 'Error', error: err });
        }
        if (!alunoFind || Object.keys(alunoFind).length === 0) {
            return res.status(404).send('Aluno não encontrado!');
        }
        alunoDAO.remove({ _id: req.body.id }, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao deletar aluno', error: err });
            }
            return res.status(200).json({ message: 'Aluno deletado!' });
        });
    });
}