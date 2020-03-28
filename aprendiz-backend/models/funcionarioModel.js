const mongoose = require('mongoose')
var Float = require('mongoose-float').loadType(mongoose);

var FuncionarioSchema = new mongoose.Schema({

    //Dados Pessoais
    nome: {
        type: String,
        required: [true, 'Nome obrigatório']
    },
    nascimento: {
        type: Date,
        required: [true, 'Data obrigatória']
    },
    idade: {
        type: Number,
        required: false
    },
    nacionalidade: {
        type: String,
        required: [true, 'Nacionalidade obrigatória!']
    },
    cidadeNascimento: {
        type: String,
        required: [true, 'Cidade obrigatória']
    },
    sexo: {
        type: String,
        required: [true, 'Sexo obrigatório']
    },
    ufNascimento: {
        type: String,
        required: [true, 'Estado obrigatório']
    },
    tipoSanguineo: {
        type: String,
        required: [true, 'Tipo sanguíneo obrigatório']
    },
    cpf: {
        type: String,
        required: [true, 'CPF obrigatório']
    },

    //Dados RG
    rg: {
        type: String,
        required: [true, 'RG obrigatório!']
    },
    orgaoEmissor: {
        type: String,
        required: [true, 'Órgão emissor obrigatório']
    },
    dataEmissaoRG: {
        type: Date,
        required: [true, 'Data obrigatória']
    },

    //Carteira de trabalho
    ctps: {
        type: String,
        required: [true, 'Número obrigatório']
    },
    serieCTPS: {
        type: String,
        required: [true, 'Número obrigatório']
    },
    ufCTPS: {
        type: String,
        required: [true, 'Número obrigatório']
    },
    dataEmissaoCTPS: {
        type: Date,
        required: [true, 'Data obrigatória']
    },

    //Familiaridade
    nomePai: {
        type: String,
        required: [true, 'Data obrigatória']
    },
    rgPai: {
        type: String,
        required: [true, 'Número obrigatório']
    },
    nomeMae: {
        type: String,
        required: [true, 'Data obrigatória']
    },
    rgMae: {
        type: String,
        required: [true, 'Número obrigatório']
    },

    //Endereço
    logradouro: {
        //Rua,Avenida,(...)
        type: String,
        required: [true, 'Logradouro obrigatório']
    },
    numeroEndereco: {
        type: String,
        required: [true, 'Número obrigatório']
    },
    bairro: {
        type: String,
        required: [true, 'Bairro obrigatório']
    },
    cidade: {
        type: String,
        required: [true, 'Cidade obrigatória']
    },
    ufEndereco: {
        type: String,
        required: [true, 'Estado obrigatório']
    },
    cep: {
        type: String,
        required: [true, 'CEP obrigatório']
    },

    //Contatos
    telResidencial: {
        type: String,
        required: [false]
    },
    telCelular: {
        type: String,
        required: [true, 'Celular obrigatório']
    },
    email: {
        type: String,
        required: [true, 'E-mail obrigatório']
    },

    //Dados na escola
    salario: {
        type: Float,
        required: [true, 'Salário obrigatório']
    },
    matricula: {
        type: String,
        required: [true, 'Matrícula obrigatória']
    },
    funcao: {
        type: String,
        required: [true, 'Matéria obrigatório']
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Funcionario', FuncionarioSchema);