const funcionarioDAO = require('../models/funcionarioModel');

//POST
exports.addFuncionario = (req, res, next) => {
    funcionarioDAO.create({
        //Dados Pessoais
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        idade: req.body.idade,
        nacionalidade: req.body.nacionalidade,
        cidadeNascimento: req.body.cidadeNascimento,
        sexo: req.body.sexo,
        ufNascimento: req.body.ufNascimento,
        tipoSanguineo: req.body.tipoSanguineo,
        cpf: req.body.cpf,

        //Dados RG
        rg: req.body.rg,
        orgaoEmissor: req.body.orgaoEmissor,
        dataEmissaoRG: req.body.dataEmissaoRG,

        //Dados Carteira de trabalho
        ctps: req.body.ctps,
        serieCTPS: req.body.serieCTPS,
        ufCTPS: req.body.ufCTPS,
        dataEmissaoCTPS: req.body.dataEmissaoCTPS,

        //Familiaridade
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
        funcao: req.body.funcao

    }, (err, funcionario) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao criar funcionario', error: err })

        if (!funcionario || Object.keys(funcionario).length === 0)
            return res.status(404).send('Funcionario não encontrado!')

        return res.status(200).json({
            message: 'Funcionario criado!',
            funcionario: funcionario
        })
    });
}

//GET
exports.getAllFuncionarios = (req, res, next) => {
    funcionarioDAO.find().exec((err, funcionarioList) => {
        if (err)
            return res.status(500).json({ error: err })

        if (!funcionarioList || funcionarioList.length === 0)
            return res.status(404).send('Funcionarioes não encontrados!')

        return res.status(200).json({ funcionario: funcionarioList })
    })
}

//GET
exports.getOneFuncionario = (req, res, next) => {
    funcionarioDAO.findById(req.body.id, (err, funcionario) => {
        if (err)
            return res.status(500).json({ message: 'Erro ao procurar funcionario', error: err });

        if (!funcionario || Object.keys(funcionario).length === 0) {
            return res.status(404).send('Funcionario não encontrado!');
        }

        return res.status(200).json({ funcionario: funcionario });
    })
}

//PUT
exports.updateFuncionario = (req, res, next) => {
    funcionarioDAO.findById({ _id: req.body.id }, (err, funcionario) => {
        if (err) {
            return handleError(err);
        }
        if (!funcionario || Object.keys(funcionario).length === 0) {
            return res.status(404).send('Funcionario não encontrado!');
        }
        funcionario.set({
            //Dados Pessoais
            nome: req.body.nome,
            nascimento: req.body.nascimento,
            idade: req.body.idade,
            nacionalidade: req.body.nacionalidade,
            cidadeNascimento: req.body.cidadeNascimento,
            sexo: req.body.sexo,
            ufNascimento: req.body.ufNascimento,
            tipoSanguineo: req.body.tipoSanguineo,
            cpf: req.body.cpf,

            //Dados RG
            rg: req.body.rg,
            orgaoEmissor: req.body.orgaoEmissor,
            dataEmissaoRG: req.body.dataEmissaoRG,

            //Dados Carteira de trabalho
            ctps: req.body.ctps,
            serieCTPS: req.body.serieCTPS,
            ufCTPS: req.body.ufCTPS,
            dataEmissaoCTPS: req.body.dataEmissaoCTPS,

            //Familiaridade
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
            funcao: req.body.funcao
        })
        funcionario.save((err, funcionarioUpdated) => {
            if (err)
                return handleError(err);

            return res.status(200).json({
                message: 'Funcionario atualizado!',
                funcionario: funcionarioUpdated
            });
        });
    });
}

//DELETE
exports.deleteFuncionario = (req, res, next) => {
    funcionarioDAO.findById(req.body.id, (err, funcionarioFind) => {
        if (err) {
            return res.status(404).json({ message: 'Error', error: err });
        }
        if (!funcionarioFind || Object.keys(funcionarioFind).length === 0) {
            return res.status(404).send('Funcionario não encontrado!');
        }
        funcionarios.remove({ _id: req.body.id }, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao deletar funcionario', error: err });
            }
            return res.status(200).json({ message: 'Funcionario deletado!' });
        });
    });
}