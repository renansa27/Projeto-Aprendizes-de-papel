const professorDAO = require('../models/professorModel');

//POST
exports.addProfessor = (req, res, next) => {
    professorDAO.create({
        //Dados Pessoais
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        nacionalidade: req.body.nacionalidade,
        cidadeNascimento: req.body.cidadeNascimento,
        ufNascimento: req.body.ufNascimento,
        cpf: req.body.cpf,
        tipoSanguineo: req.body.tipoSanguineo,
        idade: req.body.idade,
        sexo: req.body.sexo,

        //Dados RG
        rg: req.body.rg,
        orgaoEmissor: req.body.orgaoEmissor,
        dataEmissaoRG: req.body.dataEmissaoRG,

        //Dados Carteira de trabalho
        ctps: req.body.ctps,
        serieCTPS: req.body.serieCTPS,
        ufCTPS: req.body.ufCTPS,
        dataEmissaoCTPS: req.body.dataEmissaoCTPS,

        //Dados Pais
        nomePai: req.body.nomePai,
        rgPai: req.body.rgPai,
        nomeMae: req.body.nomeMae,
        rgMae: req.body.rgMae,

        //Endereço
        logradouro: req.body.logradouro,
        numeroEndereco: req.body.numeroEndereco,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        ufEndereco: req.body.ufEndereco,
        cep: req.body.cep,

        //Contatos
        telResidencial: req.body.telResidencial,
        telCelular: req.body.telCelular,
        email: req.body.email,

        //Dados na escola
        salario: req.body.salario,
        matricula: req.body.matricula,
        serie: req.body.serie,
        turmas: req.body.turmas,
        materia: req.body.materia


    }, (err, professor) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao criar professor', error: err })

        if (!professor || Object.keys(professor).length === 0)
            return res.status(404).send('Professor não encontrado!')

        return res.status(200).json({
            message: 'Professor criado!',
            professor: professor
        })
    });
}

//GET
exports.getAllProfessors = (req, res, next) => {
    professorDAO.find().exec((err, professorList) => {
        if (err)
            return res.status(500).json({ error: err })

        if (!professorList || professorList.length === 0)
            return res.status(404).send('Professores não encontrados!')

        return res.status(200).json({ professor: professorList })
    })
}

//GET
exports.getOneProfessor = (req, res, next) => {
    professorDAO.findById(req.body.id, (err, professor) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao procurar professor', error: err });

        if (!professor || Object.keys(professor).length === 0) {
            return res.status(404).send('Professor não encontrado!');
        }

        return res.status(200).json({ professor: professor });
    })
}

//PUT
exports.updateProfessor = (req, res, next) => {
    professorDAO.findById({ _id: req.body.id }, (err, professor) => {
        if (err) {
            return handleError(err);
        }
        if (!professor || Object.keys(professor).length === 0) {
            return res.status(404).send('Professor não encontrado!');
        }
        professor.set({
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            nacionalidade: req.body.nacionalidade,
            cidadeNascimento: req.body.cidadeNascimento,
            ufNascimento: req.body.ufNascimento,
            cpf: req.body.cpf,
            tipoSanguineo: req.body.tipoSanguineo,
            idade: req.body.idade,
            sexo: req.body.sexo,

            //Dados RG
            rg: req.body.rg,
            orgaoEmissor: req.body.orgaoEmissor,
            dataEmissaoRG: req.body.dataEmissaoRG,

            //Dados Carteira de trabalho
            ctps: req.body.ctps,
            serieCTPS: req.body.serieCTPS,
            ufCTPS: req.body.ufCTPS,
            dataEmissaoCTPS: req.body.dataEmissaoCTPS,

            //Dados Pais
            nomePai: req.body.nomePai,
            rgPai: req.body.rgPai,
            nomeMae: req.body.nomeMae,
            rgMae: req.body.rgMae,

            //Endereço
            logradouro: req.body.logradouro,
            numeroEndereco: req.body.numeroEndereco,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            ufEndereco: req.body.ufEndereco,
            cep: req.body.cep,

            //Contatos
            telResidencial: req.body.telResidencial,
            telCelular: req.body.telCelular,
            email: req.body.email,

            //Dados na escola
            salario: req.body.salario,
            matricula: req.body.matricula,
            serie: req.body.serie,
            turmas: req.body.turmas,
            materia: req.body.materia
        })
        professor.save((err, professorUpdated) => {
            if (err)
                return handleError(err);

            return res.status(200).json({
                message: 'Professor atualizado!',
                professor: professorUpdated
            });
        });
    });
}

//DELETE
exports.deleteProfessor = (req, res, next) => {
    professorDAO.findById(req.body.id, (err, professorFind) => {
        if (err) {
            return res.status(404).json({ message: 'Error', error: err });
        }
        if (!professorFind || Object.keys(professorFind).length === 0) {
            return res.status(404).send('Professor não encontrado!');
        }
        professors.remove({ _id: req.body.id }, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao deletar professor', error: err });
            }
            return res.status(200).json({ message: 'Professor deletado!' });
        });
    });
}